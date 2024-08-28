import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { HttpService } from '../../../services/http.service';
import { ExcelExportService } from '../../../services/excel-expoort-service';
@Component({
  selector: 'app-important-tasks',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './important-tasks.component.html',
  styleUrl: './important-tasks.component.scss',
})
export class ImportantTasksComponent {
  newTask="";
  taskList:any[]=[];
  httpService=inject(HttpService);

  excelExportService = inject(ExcelExportService);

  ngOnInit(){
    this.getAllTasks();
  }
  getAllTasks(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList=result.filter((x:any)=>x.important==true);
    })
  }
  onComplete(task:any){
    task.completed=true;
    console.log("complete",task)
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
  onImportant(task:any){
    task.important=true;
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
  
  exportTasks() {
    const filename = 'tasks.xlsx';
    this.excelExportService.exportToExcel(this.taskList, filename);
  }
}
