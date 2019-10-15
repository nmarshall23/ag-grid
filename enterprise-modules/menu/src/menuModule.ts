import {Module, ModuleNames, ModuleRegistry} from "ag-grid-community";
import {EnterpriseMenuFactory} from "./menu/enterpriseMenu";
import {ContextMenuFactory} from "./menu/contextMenu";
import {MenuItemMapper} from "./menu/menuItemMapper";

export const MenuModule: Module = {
    moduleName: ModuleNames.MenuModule,
    beans: [ EnterpriseMenuFactory, ContextMenuFactory, MenuItemMapper]
};

ModuleRegistry.register(MenuModule);
