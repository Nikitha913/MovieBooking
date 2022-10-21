import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service'; 
@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {
  
  constructor(private active:ActivatedRoute,private Api:ApiService) { }
 lists:any;

  ngOnInit(): void { 
    //this.display=this.active.snapshot.paramMap.get('Year');
    this.Api.getList().subscribe(data=>{
      this.lists=data;
    })
  }

}
