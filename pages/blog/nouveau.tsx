import React, { Component, useState } from "react";
import { withApollo } from "../../utils/withApollo";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
// import { Editor } from "react-draft-wysiwyg";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

import { convertToHTML } from "draft-convert";

import { sanitize } from "dompurify";
import RichTextEditor from "../../components/rich-text-editor";
import Button from "../../components/button/button";
import AppLayout from "../../components/app-layout";
import {
  PostsDocument,
  useCreatePostMutation,
  useMeQuery,
} from "../../generated/graphql";
import Input from "../../components/form/input";
import TextArea from "../../components/form/textarea";
import { slugify } from "../../utils/slugify";
import { useRouter } from "next/router";

const NewBlog = () => {
  // error: creating blog
  const [error, setError] = useState("");
  const router = useRouter();
  const [createPost] = useCreatePostMutation({
    refetchQueries: [
      { query: PostsDocument, variables: { cursor: null, limit: 15 } },
    ],
  });
  const { data } = useMeQuery();

  const [state, setState] = useState({
    title: "",
    content: "",
  });
  
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertedContent] = useState("");

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    convertContentToHTML();
  };

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

  const createMarkup = (html: string) => {
    return {
      __html: html,
    };
  };

  const publish = async () => {
    // console.log(convertedContent);
    if (convertedContent) {
      try {
        const slug = slugify(data?.me?.username as string, state.title);
        const response = await createPost({
          variables: {
            title: state.title,
            content: state.content,
            html: convertedContent,
            slug,
          },
        });

        if (response.data?.createPost) {
          router.push("/blog");
        }
      } catch (error) {
        setError("Une erreur s'est produite!");
      }
    } else {
      console.log("no content");
    }
  };

  return (
    <AppLayout>
      <section className="padding-y-lg">
        <div className="container max-width-md">
          <h1 className="color-primary margin-bottom-sm">Nouveau blog</h1>
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
          <div className="margin-top-sm flex items-center justify-center">
            {/* <h2 className="color-primary">Aperçu</h2> */}
            {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div> */}
            <Button variant="primary" handler={publish}>
              Publier
            </Button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(NewBlog);
