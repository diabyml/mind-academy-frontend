import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
// import { Editor } from "react-draft-wysiwyg";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

interface Props {
  editorState: EditorState;
  handleEditorChange: (state: EditorState) => void;
}

const RichTextEditor = ({ editorState, handleEditorChange }: Props) => {
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={handleEditorChange}
      wrapperClassName="wrapper"
      editorClassName="editor"
      toolbarClassName="toolbar"
      toolbar={{
        options: ['inline', 'blockType', 'list', 'textAlign', 'emoji', 'remove', 'history'],
      }}
    />
  );
};

export default RichTextEditor;
