// excel-export.service.ts
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {
  constructor() { }

  exportToExcel(taskList: any[], filename: string): void {
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    
    // Convert taskList to a worksheet
    const ws = XLSX.utils.json_to_sheet(taskList);

    // Append worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Tasks');

    // Write workbook to file
    XLSX.writeFile(wb, filename);
  }
}
