import { Component, OnInit } from '@angular/core';
import { DatataService } from '../datata.service';
import { Post } from '../post';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  postToDisplay: Post[] = [];

  constructor(private dataSrv: DatataService){
    //subscribe to changes in the observable
    this.dataSrv.getPosts().subscribe(data => {
      this.postToDisplay = data;//get the new data
      console.log(data);
    });
  }
  ngOnInit() {}
  }


  /*
  Inject the service
  create a local array
  html
    create an *ngFor to cycle through the local array
    create a card for each post
    */
