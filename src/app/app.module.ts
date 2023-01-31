import { UserSectionModule } from './components/user-section/user-section.module';
import { StockTableModule } from './components/stock-table/stock-table.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomSectionComponent } from './components/stock-table/stock-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSectionComponent } from './components/user-section/user-section.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StockTableModule,
    UserSectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
