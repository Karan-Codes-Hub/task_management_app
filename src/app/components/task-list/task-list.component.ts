import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() taskList: any[] = [];
  @Output() important = new EventEmitter<any>();
  @Output() statusChange = new EventEmitter<any>();



  ngOnInit() {
    this.initializeImportant();
  }

  // Initialize 'important' property to false if it's not defined
  initializeImportant() {
    this.taskList.forEach(task => {
      if (task.important === undefined || task.important === null) {
        task.important = false;
      }
    });
  }


  // Method to emit an important task event
  markImportant(task: any) {
    task.important = !task.important; // Toggle the important status
    this.statusChange.emit(task); // Emit the updated task
  }

  // Method to change the status
  changeStatus(task: any, event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    task.status = selectElement.value; // Update task status locally
    this.statusChange.emit(task); // Emit the updated task
  }

  // Method to change the priority
  changePriority(task: any, event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    task.priority = selectElement.value; // Update task priority locally
    this.statusChange.emit(task); // Emit the updated task with priority change
  }
}
