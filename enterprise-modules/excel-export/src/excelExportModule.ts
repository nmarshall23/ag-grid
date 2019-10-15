import {Module, ModuleNames, ModuleRegistry} from "ag-grid-community";
import {ExcelXlsxFactory} from "./excelExport/excelXlsxFactory";
import {ExcelXmlFactory} from "./excelExport/excelXmlFactory";
import {ExcelCreator} from "./excelExport/excelCreator";
import {CsvCreator, Downloader, GridSerializer, XmlFactory, ZipContainer} from "@ag-community/csv-export";

export const ExcelExportModule: Module = {
    moduleName: ModuleNames.ExcelExportModule,
    beans: [
        // beans in this module
        ExcelCreator, ExcelXmlFactory, ExcelXlsxFactory,

        // these beans are part of CSV Export module
        GridSerializer, ZipContainer, XmlFactory, Downloader, CsvCreator]
};

ModuleRegistry.register(ExcelExportModule);
