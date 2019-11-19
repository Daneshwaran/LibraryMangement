import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';


const routes: Routes = [
  { path:'',component:BrowseBooksComponent},
  { path:'browse',component:BrowseBooksComponent},
  { path:'return',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
