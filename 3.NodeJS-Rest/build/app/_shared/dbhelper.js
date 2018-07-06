"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DBHelper {
    static getImportRequests() {
        return this.inMemoryDB.imports;
    }
    static getExportRequests() {
        return this.inMemoryDB.exports;
    }
    static putImportRequest(data) {
        this.inMemoryDB.imports.push(data);
        return this.inMemoryDB.imports.length - 1;
    }
    static putExportRequest(data) {
        this.inMemoryDB.exports.push(data);
        return this.inMemoryDB.exports.length - 1;
    }
    static updateImportsAt(index, newData) {
        this.inMemoryDB.imports[index] = newData;
    }
    static updateExportsAt(index, newData) {
        this.inMemoryDB.exports[index] = newData;
    }
}
DBHelper.inMemoryDB = {
    exports: [],
    imports: []
};
exports.default = DBHelper;
