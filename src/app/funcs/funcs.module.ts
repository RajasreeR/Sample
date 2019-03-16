import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ProjectComponent } from './project/project.component';
import { ViewTaskComponent } from './view-task/view-task.component';

@NgModule({
  declarations: [UserComponent, AddTaskComponent, ProjectComponent, ViewTaskComponent],
 exports:[UserComponent, AddTaskComponent, ProjectComponent, ViewTaskComponent] , imports: [
    CommonModule
  ]
})
export class FuncsModule { }
