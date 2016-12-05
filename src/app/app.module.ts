import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeerService } from './beer.service';
import { ElementComponent } from './element/element.component';
import { RowComponent } from './row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
