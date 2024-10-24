import { Injectable } from "@angular/core"; 
import { Destination } from "./destination.model"; 
import { data } from "../data"; 

@Injectable()

 export class DestinationRepository { 
  private destinations: Destination[] = []; 
  private categories: string[] = []; 
  
  constructor() { 
   this.loadData(); 
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

  private loadData() {
    // Access the destinations from data.js
    this.destinations = data.destinations;
    this.categories = data.destinations
      .map((d) => d.category ?? '(None)')
      .filter((c, index, array) => array.indexOf(c) === index)
      .sort();
  }
}