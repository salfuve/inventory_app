import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:8080'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/items`);
  }

  searchItemsByName(name: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/items/search?name=${name}`);
  }
  
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.baseUrl}/items`, item);
  }

  deleteItem(id: number): Observable<void> {
    const url = `${this.baseUrl}/items/${id}`;
    return this.http.delete<void>(url);
  }

  deleteAllItems(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/items`);
  }

  updateItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/items/${id}`, item);
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/items/${id}`);
  }
}