import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IMovielist} from '../list';
import { BookingsService } from '../bookings.service';
import { ApiService } from '../services/api.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
title:any;
poster:any;
year:any;
numberoftickets:any;
arr:any=[];
productForm !:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,private FormBuilder:FormBuilder,private api :ApiService) { 
  
  }

  ngOnInit(): void {
    this.productForm=this.FormBuilder.group({
      Name:['',Validators.required],
      nof:['',Validators.required],
      show:['',Validators.required]
    })
    this.title=this.activatedRoute.snapshot.paramMap.get('Title');
    this.year=this.activatedRoute.snapshot.paramMap.get('Year');
    this.numberoftickets=this.activatedRoute.snapshot.paramMap.get('Numberoftickets');
  }
  saveData(x:any){
   localStorage.setItem('booking',JSON.stringify(x));
  }
  updatetickets(x:any){
    console.log(JSON.stringify(x));
    let p=x.nof;
    console.log(p);
     console.log("hello");
    console.log(this.numberoftickets);
    this.numberoftickets=this.numberoftickets-p;
    console.log(this.numberoftickets);
  }
  addproduct(){
    console.log(this.productForm.value);
    console.log("no");
    if(this.productForm.valid){
      console.log("yes");
      this.api.postList(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Tickets Booked Successfully");
        },
        error:()=>{
          alert("Tickets are not booked!!")
        }
      })
      this.api.getList().subscribe(data=>{
        this.arr=data;
      })
    }
    else{
      alert("Enter Valid Details");
    }
  }
  
}
