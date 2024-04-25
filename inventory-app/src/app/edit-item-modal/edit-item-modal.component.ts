import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Item } from '../item/item.model';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.css'],
})
export class EditItemModalComponent {
  editedItem: Item;

  constructor(
    private itemService: ItemService,
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: Item }
  ) {
    this.editedItem = { ...data.item };
  }

  onSave(): void {
    if (this.editedItem.id) {
      this.itemService
        .updateItem(this.editedItem.id, this.editedItem)
        .subscribe(
          () => {
            this.dialogRef.close(this.editedItem);
          },
          (error) => {
            console.error(
              'Error' + error + 'trying to edit item with id:',
              this.editedItem.id
            );
          }
        );
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
