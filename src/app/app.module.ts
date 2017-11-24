import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalComponent } from './cal.component';
import { WordsComponent } from './words/words.component';
import { ListPersonComponent } from './list-person/list-person.component';

@NgModule({
  declarations: [
    AppComponent,
    CalComponent,
    WordsComponent,
    ListPersonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
