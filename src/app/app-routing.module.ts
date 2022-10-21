import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BookingsComponent } from './bookings/bookings.component';
import { EditComponent } from './edit/edit.component';
import { MovielistComponent } from './movielist/movielist.component';

const routes: Routes = [
  {
    component:BookingsComponent,
    path:'bookings/:Title/:Year/:Numberoftickets'
  },
  {
    component:MovielistComponent,
    path:''
  },
  {
    component:BookinglistComponent,
    path:'bookinglist/:title'
  },
  {
    component:EditComponent,
    path:'edit/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
