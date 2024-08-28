import { Routes } from '@angular/router';
import { AllTaskComponent } from './components/pages/all-task/all-task.component';
import { ImportantTasksComponent } from './components/pages/important-tasks/important-tasks.component';
import { CompletedTasksComponent } from './components/pages/completed-tasks/completed-tasks.component';
import { IncompletedComponent } from './components/pages/incompleted/incompleted.component';
import { TodoComponent } from './components/pages/todo/todo.component';
import { HighPriorityComponent } from './components/pages/high-priority/high-priority.component';
import { LowPriorityComponent } from './components/pages/low-priority/low-priority.component';
import { MediumPriorityComponent } from './components/pages/medium-priority/medium-priority.component';
export const routes: Routes = [
  {
    path: '',
    component: AllTaskComponent,
  },
  {
    path: 'importants',
    component: ImportantTasksComponent,
  },
  {
    path: 'completed',
    component: CompletedTasksComponent,
  },
  
  {
    path :'todo',
    component: TodoComponent,
  }, 
  {
    path:'notcompleted',
    component : IncompletedComponent,
  },
  
  {
    path:'high_priority',
    component : HighPriorityComponent,
  },
  {
    path:'medium_priority',
    component : MediumPriorityComponent,
  },
  {
    path:'low_priority',
    component : LowPriorityComponent,
  }
];
