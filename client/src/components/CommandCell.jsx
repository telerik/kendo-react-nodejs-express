import * as React from "react";
import CellContext from '../context/cell-context';

const MyCommandCell = props => {
    const currentContext = React.useContext(CellContext);
    /**
    * Return null if this is a group header cell.
    */
    if(props.rowType === 'groupHeader') return null;

    const { dataItem } = props;
    const isNewItem = dataItem.ProductID === undefined;


    const inEdit = dataItem[currentContext.editField];

    return inEdit ?
            (<td className="k-command-cell">
                <button className="k-button k-grid-save-command" onClick={() => isNewItem ? currentContext.add(dataItem) : currentContext.update(dataItem)}>
                    {isNewItem ? "Add" : "Update"}
                </button>
                <button className="k-button k-grid-cancel-command" onClick={() => isNewItem ? currentContext.discard(dataItem) : currentContext.cancel()}>
                    {isNewItem ? "Discard" : "Cancel"}
                </button>
            </td>) :   
            (<td className="k-command-cell">
                <button className="k-primary k-button k-grid-edit-command" onClick={() => currentContext.enterEdit(dataItem)}>
                    Edit
                </button>
                <button className="k-button k-grid-remove-command" onClick={() => window.confirm("Confirm deleting: " + dataItem.ProductName) && currentContext.remove(dataItem)}>
                    Remove
                </button>
            </td>);
};

export default MyCommandCell;