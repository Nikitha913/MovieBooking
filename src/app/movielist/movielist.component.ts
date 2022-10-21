import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
import {IMovielist} from '../list';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  public movielist:IMovielist[]=[];
  constructor(private _movielist:MovielistService) { }

  ngOnInit() {
    this._movielist.getMovielist()
        .subscribe((data)=>this.movielist=data);
  }
 
}
