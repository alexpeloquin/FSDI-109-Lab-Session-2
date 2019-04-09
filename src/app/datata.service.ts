import { Injectable } from '@angular/core';
import { Post } from './post';
import {AngularFirestoreCollection,AngularFirestore} from "angularfire2/firestore";

//import for realtime DB readings
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { firestore } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class DatataService {
  
  private posts: Observable<Post[]>;

  //collection of objects -> DB
  postCollection:AngularFirestoreCollection<Post>;

  constructor(private db:AngularFirestore) {
    this.postCollection = db.collection<Post>("posts");

    // read the data and created the subscription
    this.posts = this.postCollection.snapshotChanges().pipe(
      map(actions => {
         return actions.map( a => {
            let  data = a.payload.doc.data();
            const  id = a.payload.doc.id;
            const d: any = data.date;
            data.date = new firestore.Timestamp(
              d.seconds,
              d.nanoseconds
            ).toDate();
            return { id, ... data};
         });
      })
  );
  }

  //saves the post
  public savePost(post:Post){
    //this.posts.push(post); //pushes to array

    var item = Object.assign({},post)//convert
    this.postCollection.add(item);//store on FB
  }

  //returns all the posts
  public getPosts(){
    return this.posts;
  }

}
