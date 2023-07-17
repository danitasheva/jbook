// import React from 'react'
import { Cell } from "../store";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
    let child: JSX.Element;
    if ( cell.type === "code" ) {
        child = <CodeCell cell={cell} />
    } else {
        child = <TextEditor />
    }

  return <div>{child}</div>;
};

export default CellListItem;