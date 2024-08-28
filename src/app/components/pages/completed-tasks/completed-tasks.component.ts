import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { ExcelExportService } from '../../../services/excel-expoort-service';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'] // Corrected property name
})
export class CompletedTasksComponent {
  newTask = '';
  taskList: any[] = [];
  httpService = inject(HttpService);
  excelExportService = inject(ExcelExportService);

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result: any) => {
      // Filter tasks based on the status field
      this.taskList = result.filter((x: any) => x.status === 'completed');
    });
  }

  onComplete(task: any) {
    task.status = 'completed';
    console.log('Complete', task);
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }

  onInProgress(task: any) {
    task.status = 'in_progress';
    console.log('In Progress', task);
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }

  onInComplete(task: any) {
    task.status = 'not_completed';
    console.log('Not Completed', task);
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }

  onImportant(task: any) {
    task.important = true;
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }

  exportTasks() {
    const filename = 'tasks.xlsx';
    this.excelExportService.exportToExcel(this.taskList, filename);
  }
}
