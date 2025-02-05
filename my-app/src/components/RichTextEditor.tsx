// src/components/RichTextEditor.tsx
import React, { useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'draft-js';

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  return (
    <div>
      <Editor editorState={editorState} onChange={handleEditorChange} />
    </div>
  );
};

export default RichTextEditor;
