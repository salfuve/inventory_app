import { Component, Inject, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  displayedColumns: string[] = [
    'name',
    'quantity',
    'shelvingLevel',
    'shelvingNumber',
    'isInsideBox',
    'comment',
    'actions',
  ]; // Specify columns to display in the table

  constructor(private router: Router, private itemService: ItemService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
    });
  }

  updateItem(item: Item): void {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '500px',
      data: { item: item }
    })}

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(
      () => {
        this.items = this.items.filter((item) => item.id !== id);

        console.log('Ítem eliminado exitosamente');
        // Puedes realizar otras acciones después de eliminar el ítem si es necesario
      },
      (error) => {
        console.error('Error al eliminar el ítem:', error);
      }
    );
  }

  goToCreateItem(): void {
    this.router.navigate(['/add-item']);
  }
}