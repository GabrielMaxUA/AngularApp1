import { Injectable } from "@angular/core"; 
import { Destination } from "./destination.model"; 
import { Observable, from, of } from "rxjs";

@Injectable({
  providedIn: 'root'
}) 

export class DataSource { 
  private destinations: Destination[] = [ 
    new Destination(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100, "12-15"),
    new Destination(2, "Product 1", "Category 2", "Product 1 (Category 1)", 100, "12-15"),
    new Destination(3, "Product 1", "Category 3", "Product 1 (Category 1)", 100, "12-15"),
    new Destination(4, "Product 1", "Category 2", "Product 1 (Category 1)", 100, "12-15"),
    new Destination(5, "Product 1", "Category 1", "Product 1 (Category 1)", 100, "12-15"),
    new Destination(6, "Product 1", "Category 3", "Product 1 (Category 1)", 100, "12-15")
  ];

  getDestinations(): Observable<Destination[]> { 
    return of(this.destinations); 
  }
  
}