import { createContext } from 'react';

const CellContext = createContext({
    enterEdit: () => {},
    remove: () => {},
    add: () => {},
    discard: () => {},
    update: () => {},
    cancel: () => {},
    editFieldID: null
});

export default CellContext;