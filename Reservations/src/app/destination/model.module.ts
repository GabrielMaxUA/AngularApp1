import { NgModule } from "@angular/core"; 
import { DestinationRepository } from "./destination.repository"; 
import { DataSource } from "./dataSource"; 

@NgModule({ 
  providers: [DestinationRepository, DataSource] 
}) 

export class ModelModule { }