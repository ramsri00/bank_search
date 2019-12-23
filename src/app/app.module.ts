import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router} from '@angular/router';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, } from '@angular/forms';
import {MatSelectModule,MatSortModule,
  MatTableModule, MatFormFieldModule, MatInputModule,MatPaginatorModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
//import { SearchService } from './search.service';
import { BankHttpService} from './bank-http.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,

  ],
  providers: [BankHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
