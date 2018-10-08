import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCd6Uq-dGsuu1l95zlwHRbMnqsnZejhKuA",
      authDomain: "ng-recipe-book-2a634.firebaseapp.com"
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  
}
