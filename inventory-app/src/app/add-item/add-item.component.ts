import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item.model';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  newItem: Item = {
    name: '',
    quantity: 0,
    shelvingLevel: 0,
    shelvingNumber: 0,
    isInsideBox: false,
    comment: ''
  };

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  
  addItem(): void {

    console.log('item add:',this.newItem)
    this.itemService.addItem(this.newItem).subscribe(addedItem => {
      console.log('Item added successfully:', addedItem);
    }, error => {
      console.error('Error adding item:', error);
    });
  }

}
