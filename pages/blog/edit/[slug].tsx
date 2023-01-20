import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AppLayout from "../../../components/app-layout";
import Input from "../../../components/form/input";
import { withApollo } from "../../../utils/withApollo";
import {
  usePostQuery,
  useUpdatePostMutation,
} from "../../../generated/graphql";
import Button from "../../../components/button/button";
import TextArea from "../../../components/form/textarea";
import { ContentState, convertFromHTML, EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import RichTextEditor from "../../../components/rich-text-editor";

const EditBlog = () => {
  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertedContent] = useState("");

  const router = useRouter();

  const { loading, error, data } = usePostQuery({
    variables: { slug: router.query.slug as string },
  });

  const [updatePost,{data: updatedData,loading:loadingUpdate}] = useUpdatePostMutation();

  useEffect(() => {
    if (!loading && data?.post) {
      setState({
        title: data.post.title,
        content: data.post.content as string,
      });

      // editor
      const blocksFromHtml = convertFromHTML(data.post.html);

      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            blocksFromHtml.contentBlocks,
            blocksFromHtml.entityMap
          )
        )
      );
    }
  }, [setState, data, loading]);

  if (!data && loading) {
    return (
      <AppLayout>
        <div>loading...</div>
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout>
        <div>An error occured</div>
      </AppLayout>
    );
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleMessageInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const save = async () => {
    // console.log(state);
    // convertContentToHTML();

    const newPost = {
      slug: router.query.slug as string,
      ...state,
      html: ''
    };

    if(convertedContent) {
      newPost.html = convertedContent;
    }


    await updatePost({
      variables: newPost
    });

  };

  return (
    <AppLayout>
      <section className="padding-y-lg">
        <div className="container max-width-md">
          <h1 className="color-primary margin-bottom-sm">Modifier blog</h1>
          <div>
            <div className="margin-bottom-sm">
              <Input
                id="title"
                type="text"
                name="title"
                value={state.title}
                // error={errors.region}
                label="Titre"
                handler={handleInput}
              />
            </div>
            <div className="form-label margin-bottom-xxxs">
              <span>Contenu du blog</span>
            </div>
            <div className="rich-text-editor margin-bottom-sm">
              <RichTextEditor
                editorState={editorState}
                handleEditorChange={handleEditorChange}
              />
            </div>
            <div className="margin-bottom-sm">
              <TextArea
                id="content"
                type="text"
                name="content"
                value={state.content}
                // error={errors.message}
                label="Résumé"
                placeholder="résumé"
                handler={handleMessageInput}
              />
            </div>

            {
              updatedData?.updatePost && <div className="flex items-center justify-center margin-bottom-sm">
                <span className="color-success text-md">enregistrée</span>
              </div>
            }

            <div className="margin-top-sm flex items-center justify-center">
              <Button variant="primary" handler={save}>
                Sauvegarder
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(EditBlog);
