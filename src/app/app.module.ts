import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {IMovielist} from './list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovielistComponent } from './movielist/movielist.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MovielistService } from './movielist.service';
import { BookingsService } from './bookings.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    BookingsComponent,
    BookinglistComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovielistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
