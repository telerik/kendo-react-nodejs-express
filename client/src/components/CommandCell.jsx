import * as React from "react";
import DataContext from '../context/data-context';
import { Button } from "@progress/kendo-react-buttons";

const MyCommandCell = props => {
    const currentContext = React.useContext(DataContext);
    /**
    * Return null if this is a group header cell.
    */
    

    const { dataItem } = props;
    const isNewItem = dataItem.ProductID === undefined;

    const inEdit = dataItem.inEdit;

    const handleAddUpdate = React.useCallback(() =>{
        if(isNewItem){
            currentContext.add(dataItem)
        } else {
            currentContext.update(dataItem)
        }
    },[currentContext, dataItem, isNewItem])

    const handleDiscardCancel = React.useCallback(()=>{
        isNewItem ? currentContext.discard(dataItem) : currentContext.cancel()
    },[currentContext, dataItem, isNewItem])

    const handleEdit = React.useCallback(()=> {
        currentContext.enterEdit(dataItem)
    },[currentContext, dataItem])

    const handleDelete = React.useCallback(()=> {
        window.confirm("Confirm deleting: " + dataItem.ProductName) && currentContext.remove(dataItem)
    },[currentContext, dataItem])

    if(props.rowType === 'groupHeader') return null;
    
    return inEdit ?
            (<td className="k-command-cell">
                <Button className="k-button k-grid-save-command" onClick={handleAddUpdate}>
                    {isNewItem ? "Add" : "Update"}
                </Button>
                <Button className="k-button k-grid-cancel-command" onClick={handleDiscardCancel}>
                    {isNewItem ? "Discard" : "Cancel"}
                </Button>
            </td>) :   
            (<td className="k-command-cell">
                <Button className="k-primary k-button k-grid-edit-command" onClick={handleEdit}>
                    Edit
                </Button>
                <Button className="k-button k-grid-remove-command" onClick={handleDelete}>
                    Remove
                </Button>
            </td>);
};

export default MyCommandCell;