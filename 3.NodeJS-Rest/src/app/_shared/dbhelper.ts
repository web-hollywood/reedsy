export default class DBHelper {
  public static getImportRequests() {
    return this.inMemoryDB.imports;
  }

  public static getExportRequests() {
    return this.inMemoryDB.exports;
  }

  public static putImportRequest(data: {}): number {
    this.inMemoryDB.imports.push(data);
    return this.inMemoryDB.imports.length - 1;
  }

  public static putExportRequest(data: {}): number {
    this.inMemoryDB.exports.push(data);
    return this.inMemoryDB.exports.length - 1;
  }

  public static updateImportsAt(index: number, newData: any) {
    this.inMemoryDB.imports[index] = newData;
  }

  public static updateExportsAt(index: number, newData: any) {
    this.inMemoryDB.exports[index] = newData;
  }

  private static inMemoryDB: any = {
    exports: [],
    imports: []
  };
}