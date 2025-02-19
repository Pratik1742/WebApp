import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill'; // Import React Quill
import 'react-quill/dist/quill.snow.css'; // Import CSS for styling

const RichTextEditor = () => {
  const [editorValue, setEditorValue] = useState('');

  // Handle changes in the editor content
  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  // Save editor content to localStorage for persistence
  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setEditorValue(savedContent);
    }
  }, []);

  useEffect(() => {
    // Persist content in localStorage whenever it changes
    localStorage.setItem('editorContent', editorValue);
  }, [editorValue]);

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link'],
      [{ 'align': [] }],
      ['image'],
    ],
  };

  return (
    <div>
      <h2>Rich Text Editor</h2>
      <ReactQuill
        value={editorValue}
        onChange={handleEditorChange}
        modules={modules} // Enable formatting options
        theme="snow" // Use 'snow' theme
      />
    </div>
  );
};

export default RichTextEditor;
