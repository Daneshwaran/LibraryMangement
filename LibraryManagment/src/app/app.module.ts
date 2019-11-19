import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowseBooksComponent } from './browse-books/browse-books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { RentComponent } from './rent/rent.component'
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AngularFireModule} from '@angular/fire'
import { AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
import { ReturnComponent } from './return/return.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    BrowseBooksComponent,
    RentComponent,
    ReturnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatListModule
  ],
  entryComponents: [
    RentComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
