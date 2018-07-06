import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookTableComponent } from './components/book-table/book-table.component';

const routes: Routes = [
  {path: '', component: BookTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
