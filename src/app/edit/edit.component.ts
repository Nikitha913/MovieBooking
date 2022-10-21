import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovielistService } from '../movielist.service';
import {IMovielist} from '../list';
import { BookingsService } from '../bookings.service';
import { NgFor } from '@angular/common';
import { ApiService } from '../services/api.service';
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms'
import { NotFoundError } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
title:any;
poster:any;
year:any;
numberoftickets:any;
public movies:IMovielist[]=[];
arr:any=[];
id_m:any;
id_1:any;
productForm !:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,private _movies:BookingsService,private FormBuilder:FormBuilder,private api :ApiService) { 
  
  }
  editResponse=new FormGroup({
    Name:new FormControl(''),
    nof:new FormControl(''),
    show:new FormControl('')
  })

  ngOnInit(): void {
    this.productForm=this.FormBuilder.group({
      Name:['',Validators.required],
      nof:['',Validators.required],
      show:['',Validators.required]
    })
    this.id_m=this.activatedRoute.snapshot.paramMap.get('id');
    this.id_1=parseInt(this.id_m);
    this.api.getCurrentData(this.id_1).subscribe((result:any)=>{
      this.productForm=new FormGroup({
        Name:new FormControl(result['Name']),
        nof:new FormControl(result['nof']),
        show:new FormControl(result['show'])
      })
      console.log(result);
    })
  }
  updatedata(){
    this.api.updatedata(this.id_1,this.productForm.value).subscribe(result=>{
      console.log("Updated Succesfully",result);
      alert("Your Data is updated succesfully!!");
    })
  }
  
}
