import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ElementComponent } from './element/element.component';
import { RowComponent } from './row/row.component';
import { RowsPipe } from './rows.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    RowComponent,
    RowsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
