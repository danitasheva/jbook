import { useRef, useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import "./text-editor.css";
import { Cell } from "../store";
import { useActions } from "../hooks/useActions";

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState("#Header");
  const [editing, setEditing] = useState(false);

  const { updateCell } = useActions();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        // console.log(event.target);
        // console.log("element clicked is inside text editor");
        return;
      } else {
        //   console.log(event.target);
        //   console.log("element clicked is outside text editor");
        setEditing(false);
      }
    };
    document.addEventListener("click", listener, { capture: true });
    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div ref={ref} className="text-editor">
        <MDEditor
          value={cell.content}
          onChange={(v) => updateCell(cell.id, v || "")}
        />
        {/* <MDEditor value={cell.content} onChange={(v) =>  setValue(v || "") } /> */}
      </div>
    );
  }

  return (
    <div onClick={() => setEditing(true)} className="text-editor card ">
      <div className="card-content">
        <MDEditor.Markdown
          source={cell.content || "Click to edit"}
          style={{ whiteSpace: "pre-wrap" }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
