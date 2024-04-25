import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'add-item', component: AddItemComponent },
  { path: 'items', component: ItemComponent },
  { path: '', component: HomeComponent }, // Ruta inicial asociada con HomeComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
