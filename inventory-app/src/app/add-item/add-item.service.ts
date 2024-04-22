import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../item/item.model';

@Injectable({
    providedIn: 'root'
  })
  export class ItemService {
    private baseUrl = 'http://localhost:8080'; // Update with your backend URL
  
    constructor(private http: HttpClient) { }
  
    addItem(item: Item): Observable<Item> {
      return this.http.post<Item>(`${this.baseUrl}/items`, item);
    }
  }