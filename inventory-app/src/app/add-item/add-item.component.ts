import { Component } from '@angular/core';
import { Item } from '../item/item.model';
import { ItemService } from '../item/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent{
  newItem: Item = {
    name: '',
    quantity: 0,
    shelvingLevel: 0,
    shelvingNumber: 0,
    location: '',
    comment: '',
  };

  constructor(private router: Router, private itemService: ItemService) {}

  addItem(): void {
    console.log('item add:', this.newItem);
    this.itemService.addItem(this.newItem).subscribe(
      (addedItem) => {
        console.log('Item added successfully:', addedItem);
      },
      (error) => {
        console.error('Error adding item:', error);
      }
    );
    this.router.navigate(['/items']);
  }
  cancel(): void {
    this.router.navigate(['/items']);
  }
}
