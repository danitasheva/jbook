import React, { useState, useEffect } from "react";

import CodeEditor from "./code-edtor";
import Preview from "./preview";
import bundle from "../bundler";

import Resizable from "./resizable";
import { Cell } from "../store";
import { useActions } from "../hooks/useActions";

interface CodeCellProps {
  cell: Cell
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [input, setInput] = useState("");
  const { updateCell } = useActions(); 

  useEffect(() => {    
    const timer = setTimeout(async() => {
      // const output = await bundle(input);
      const output = await bundle(cell.content);
      setCode(output.code);
      setErr(output.err);
    }, 1000)
    return() => {
      clearTimeout(timer)
    }
  }, [cell.content])  

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
            initialValue={cell.content}
            // onChange={(value) => setInput(value)}
            onChange={(value) => updateCell(cell.id, value)}
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
