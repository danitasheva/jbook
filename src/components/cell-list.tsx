import { useState, useEffect} from 'react';
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from './cell-list-item';

const CellList: React.FC  = () => {

    const state = useTypedSelector((state) => state)

    const cells = useTypedSelector(({ cells: { order, data }}) => {
        return order.map((id) => {
            return data[id]; 
        })
    })

    const renderedCells = cells.map((cell) => {return (<CellListItem key={cell.id} cell={cell} />)} )

    // useTypedSelector(({ cells: { order, data }}) =>  order.map((id) => data[id])); 

    // const [cells, setCells] = useState({})

    // useEffect(() => {
    //     setCells(state)
    // }, [])

    console.log("storeState", state)
    console.log("cells ", cells)

return <div>{renderedCells}</div>

}

export default CellList;