import MonacoEditor from '@monaco-editor/react';

const CodeEditor = ({ language, value, onChange }) => {
  return (
    <MonacoEditor
      width="875px"
      height="800px"
      language={language}
      theme="vs-dark"
      value={value}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
