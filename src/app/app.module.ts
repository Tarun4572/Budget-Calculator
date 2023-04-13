import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item-list/item/item.component';


@NgModule({
  declarations: [AppComponent, AddItemComponent, ItemListComponent, ItemComponent, 
  ],

  imports: [
    FormsModule,
    BrowserModule,
     HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
