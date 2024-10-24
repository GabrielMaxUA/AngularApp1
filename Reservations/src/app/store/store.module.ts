// import { NgModule } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { ModelModule } from "../destination/model.module"; 
// import { StoreComponent } from "./store.component";
// import { CommonModule } from "@angular/common";


// @NgModule({ 
//   imports: [ModelModule, CommonModule, FormsModule], 
//   declarations: [StoreComponent], 
//   exports: [StoreComponent],
// }) 
  
//   export class StoreModule { 
//   }

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../destination/model.module"; 
import { StoreComponent } from "./store.component";
import { CommonModule } from "@angular/common";
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({ 
  imports: [ModelModule, CommonModule, FormsModule, MatTableModule, MatCheckboxModule],  
  declarations: [StoreComponent], 
  exports: [StoreComponent],
}) 
export class StoreModule { }
