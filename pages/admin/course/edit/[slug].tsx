import { EditorState, ContentState, convertFromHTML } from "draft-js";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AppLayout from "../../../../components/app-layout";
import { withApollo } from "../../../../utils/withApollo";
import {
  useCourseQuery,
  useUpdateCourseMutation,
} from "../../../../generated/graphql";
import { convertToHTML } from "draft-convert";
import Input from "../../../../components/form/input";
import RichTextEditor from "../../../../components/rich-text-editor";
import TextArea from "../../../../components/form/textarea";
import Button from "../../../../components/button/button";

const EditCourse = () => {
  const router = useRouter();
  const [state, setState] = useState({
    title: "",
    summary: "",
    thumbnail: "",
    videoLink: "",
  });

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertedContent] = useState("");

  const { loading, error, data } = useCourseQuery({
    variables: { slug: router.query.slug as string },
  });

  const [updateCourse, { data: updatedData, loading: loadingUpdate }] =
    useUpdateCourseMutation();

  useEffect(() => {
    if (!loading && data?.course) {
      setState({
        title: data.course.title,
        summary: data.course.textSnippet as string,
        thumbnail: data.course.thumbnail,
        videoLink: data.course.videoLink,
      });

      // editor
      const blocksFromHtml = convertFromHTML(data.course.html);

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
    const newCourse = {
      slug: router.query.slug as string,
      ...state,
      html: "",
    };

    if (convertedContent) {
      newCourse.html = convertedContent;
    }

    await updateCourse({ variables: newCourse });
  };

  return (
    <AppLayout>
      <section className="padding-y-lg">
        <div className="container max-width-md">
          <h1 className="color-primary margin-bottom-sm">Modifier cours</h1>
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
            <div className="margin-bottom-sm">
              <Input
                id="thumbnail"
                type="text"
                name="thumbnail"
                value={state.thumbnail}
                // error={errors.region}
                label="Lien photo"
                handler={handleInput}
              />
            </div>

            <div className="margin-bottom-sm">
              <Input
                id="videoLink"
                type="text"
                name="videoLink"
                value={state.videoLink}
                // error={errors.region}
                label="Lien video"
                handler={handleInput}
              />
            </div>
            <div className="form-label margin-bottom-xxxs">
              <span>Contenu du cours</span>
            </div>
            <div className="rich-text-editor margin-bottom-sm">
              <RichTextEditor
                editorState={editorState}
                handleEditorChange={handleEditorChange}
              />
            </div>
            <div className="margin-bottom-sm">
              <TextArea
                id="summary"
                type="text"
                name="summary"
                value={state.summary}
                // error={errors.message}
                label="Résumé"
                placeholder="résumé"
                handler={handleMessageInput}
              />
            </div>

            {/* show message when updated */}
            {updatedData?.updateCourse && (
              <div className="flex items-center justify-center margin-bottom-sm">
                <span className="color-success text-md">enregistrée</span>
              </div>
            )}

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

export default withApollo({ ssr: false })(EditCourse);
