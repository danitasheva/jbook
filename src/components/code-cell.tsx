import React, { useState, useEffect } from "react";

import CodeEditor from "./code-edtor";
import Preview from "./preview";
import bundle from "../bundler";

import Resizable from "./resizable";

const CodeCell: React.FC = () => {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {    
    const timer = setTimeout(async() => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 1000)
    return() => {
      clearTimeout(timer)
    }
  }, [input])
  
  // const onClick = async () => {
  //   const output = await bundle(input);
  //   setCode(output.code);
  //   setErr(output.err);
  // };
  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="const a = 1;"
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
  // return (
  //   <Resizable direction="vertical">
  //     <div style={{ width: "100%", display: "flex", flexDirection: 'row'}}>
  //       <CodeEditor
  //         initialValue="const a = 1;"
  //         onChange={(value) => setInput(value)}
  //       />
  //       {/* <div>
  //         <button onClick={onClick}>Submit</button>
  //       </div> */}
  //       <Preview code={code} />
  //     </div>
  //   </Resizable>
  // );
};

export default CodeCell;
