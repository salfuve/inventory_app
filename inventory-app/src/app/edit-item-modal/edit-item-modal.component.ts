import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Item } from '../item/item.model';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.css']
})
export class EditItemModalComponent {
  editedItem: Item;

  constructor(private itemService: ItemService,
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item
  ) {
    this.editedItem = { ...data }; // Copia profunda del objeto para evitar modificar el objeto original directamente
  }

  onSave(): void {
    this.itemService.updateItem
    this.dialogRef.close(this.editedItem);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
