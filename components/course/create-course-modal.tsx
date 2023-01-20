import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { useCreateCourseMutation, useMeQuery } from "../../generated/graphql";
import Button from "../button/button";
import Input from "../form/input";
import TextArea from "../form/textarea";
import RichTextEditor from "../rich-text-editor";
import { slugify } from "../../utils/slugify";

interface Props {
  onClose: (state: boolean) => void;
}

const CreateCourseModal: React.FC<Props> = ({ onClose }) => {
  const [error, setError] = useState("");
  const router = useRouter();

  const { data } = useMeQuery();

  const [state, setState] = useState({
    title: "",
    summary: "",
    thumbnail: "",
    videoLink: "",
  });

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [createCourse] = useCreateCourseMutation();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.title && state.summary && convertedContent) {
      try {
        const slug = slugify(data?.me?.username as string, state.title);
        const response = await createCourse({
          variables: {
            slug,
            title: state.title,
            summary: state.summary,
            thumbnail: state.thumbnail,
            videoLink: state.videoLink,
            html: convertedContent,
          },
        });

        if (response.data?.createCourse) {
          router.push("/cours");
        }
      } catch (error) {
        setError("Une erreur s'est produite!");
      }
    }
  };

  return (
    <div className="bg-white overflow-auto padding-y-lg position-fixed top-0 right-0 bottom-0 left-0 z-index-overlay">
      <div className="container max-width-md">
        <header className="flex items-center justify-between margin-bottom-md">
          <span className="color-primary font-semibold text-sm">
            Nouveau cours
          </span>
          <Button
            variant="danger"
            size="sm"
            handler={() => onClose(false)}
          >
            <IoMdClose />
          </Button>
        </header>
        <form onSubmit={handleSubmit}>
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
            <div className="margin-top-sm flex items-center justify-center">
              {/* <h2 className="color-primary">Aperçu</h2> */}
              {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div> */}
              <Button variant="primary">Publier</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseModal;
