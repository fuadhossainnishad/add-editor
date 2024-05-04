import "./App.css";
import React, { useState, useEffect } from "react";
import CodeEditor from "./CodeEditor.tsx";

const ManageCode = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [outputHtml, setOutputHtml] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [pageTitle, setPageTitle] = useState("Untitled");

  useEffect(() => {
    const titleRegex = /<title>(.*?)<\/title>/;
    const match = htmlCode.match(titleRegex);
    if (match) {
      setPageTitle(match[1]);
    } else {
      setPageTitle("Untitled");
    }

    setOutputHtml(htmlCode);
    setShowOutput(true);
  }, [htmlCode]);

  return (
    <div className=" ">
      <div className="flex flex-row m-10 gap-4 bg-">
      <div className="w-1/2 h-full p-4 justify-center border rounded-xl shadow-lg items-center">
        <h1 className=" w-52 text-lg font-bold  mb-2 ">HTML Code Editor:</h1>
        <CodeEditor language="html" value={htmlCode} onChange={setHtmlCode} />
      </div>
      
      <div className="w-1/2 h-[850px] p-4 justify-center border rounded-lg shadow-lg items-center">
      <h1 className=" w-52 text-lg font-bold  mb-2 ">Output In Browser:</h1>
        <div className="flex items-center justify-between w-full h-10 bg-slate-400 text-white p-2">
          <div className="flex items-center">
            <div className="h-3 w-3 bg-red-500 rounded-full mr-1"></div>
            <div className="h-3 w-3 bg-yellow-500 rounded-full mr-1"></div>
            <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
            <div className="font-semibold">{pageTitle}</div>
          </div>
        </div>
        

        {showOutput && (
          <iframe
            title="Output Browser"
            srcDoc={outputHtml}
            style={{ width: "100%", height: "calc(100% - 70px)", border: "none" }}
          />
        )}
      </div>
    </div>
    </div>
  );
};



// const App = () => {
//   const [code, setCode] = useState('');
//   const [output, setOutput] = useState(null);

//   const executeCode = () => {
//     try {
//       // Transpile React code (e.g., using Babel)
//       const transpiledCode = transpileReactCode(code);

//       // Execute the transpiled JavaScript code
//       const result = eval(transpiledCode);

//       // Set the output
//       setOutput(result);
//     } catch (error) {
//       // Handle any errors that occur during execution
//       setOutput(`Error: ${error.message}`);
//     }
//   };

//   const transpileReactCode = (code) => {
//     // Implement transpilation logic here
//     // You can use Babel or another transpiler to convert JSX to JavaScript
//     return code; // For simplicity, return the code unchanged
//   };

//   return (
//     <div>
//       <h1>React Code Editor</h1>
//       <CodeEditor
//         language="html"
//         value={code}
//         onChange={setCode}
//       />
//       <button onClick={executeCode}>Run Code</button>
//       <div>
//         <h2>Output</h2>
//         <pre>{output}</pre>
//       </div>
//     </div>
//   );
// };

export default ManageCode;
