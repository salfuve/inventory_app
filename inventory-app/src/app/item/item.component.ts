import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { MatTableDataSource } from '@angular/material/table';

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
  ]; 
  dataSource = new MatTableDataSource<Item>();
  constructor(
    private router: Router,
    private itemService: ItemService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
      this.itemService.getItems().subscribe((items) => {
        this.router.navigate(['/items']);

      this.items = items;
      this.dataSource.data = this.items;
    });
  }


  updateItem(item: Item): void {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '500px',
      data: { item: item },
    });
    dialogRef.afterClosed().subscribe((editedItem: Item) => {

      if (editedItem) {
        const index = this.items.findIndex(i => i.id === editedItem.id); 

        if (index !== -1) {
          this.items[index] = editedItem; 
          this.dataSource.data = [...this.items]; 
        }
      }
    });
  }

  handleSearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(
      () => {
        this.items = this.items.filter((item) => item.id !== id);
        this.dataSource.data = [...this.items]; 

      },
      (error) => {
        console.error('Error' + (error) +'trying to remove item with id:', id);
      }
    );
  }

  goToCreateItem(): void {
    this.router.navigate(['/add-item']);
  }
}
