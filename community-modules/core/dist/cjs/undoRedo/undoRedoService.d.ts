// Type definitions for @ag-grid-community/core v23.2.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { BeanStub } from "../context/beanStub";
export declare class UndoRedoService extends BeanStub {
    private gridOptionsWrapper;
    private focusController;
    private gridApi;
    private rowModel;
    private pinnedRowModel;
    private cellValueChanges;
    private undoStack;
    private redoStack;
    private isCellEditing;
    private isRowEditing;
    private isPasting;
    private isFilling;
    init(): void;
    private onCellValueChanged;
    private clearStacks;
    undo(): void;
    redo(): void;
    private processAction;
    private processRangeAndCellFocus;
    private setLastFocusedCell;
    private addRowEditingListeners;
    private addCellEditingListeners;
    private addPasteListeners;
    private addFillListeners;
    private pushActionsToUndoStack;
    private getRowNode;
}
