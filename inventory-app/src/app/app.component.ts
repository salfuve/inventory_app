import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from './item/item.service';
import { Item } from './item/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';
}
