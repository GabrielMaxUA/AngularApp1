import { Injectable } from "@angular/core"; 
import { Destination } from "./destination.model"; 
import { DataSource } from "./dataSource"; 

@Injectable()

 export class DestinationRepository { 
  private destinations: Destination[] = []; 
  private categories: string[] = []; 
  
  constructor(private dataSource: DataSource) { 
    dataSource.getDestinations().subscribe(data => { 
      this.destinations = data; 
      this.categories = data.map(d => d.category ?? "(None)") 
      .filter((c, index, array) => array.indexOf(c) == index).sort(); 
    }); 
  } 
  
  getDestinations(category?: string): Destination[] { 
    return this.destinations.filter(d => category == undefined || category == d.category);
  } 
   
  getDestination(id: number): Destination | undefined { 
    return this.destinations.find(d => d.id == id); 
  } 

  getCategories(): string[] { 
    return this.categories; 
  } 
}