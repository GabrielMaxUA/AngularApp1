import { Component } from "@angular/core";  
import { DestinationRepository } from "../destination/destination.repository";
import { Destination } from "../destination/destination.model";

@Component({ 
  selector: "store",
  templateUrl: './store.component.html'
}) 

export class StoreComponent { 
  constructor(private repository: DestinationRepository) {

   } 
  
  get destination(): Destination[] { 
  return this.repository.getDestinations(); 
}

get categories(): string[] { 
  return this.repository.getCategories(); 
} 

}