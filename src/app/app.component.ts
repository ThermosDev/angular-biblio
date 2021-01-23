import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: 'Projet Biblio';
  constructor() {
    const config = {
      apiKey: "AIzaSyBcEKSi5JO0Tea7nbK-1aDCgrI2VVeXxjM",
      authDomain: "projet-biblio-47a84.firebaseapp.com",
      databaseURL: "https://projet-biblio-47a84-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "projet-biblio-47a84",
      storageBucket: "projet-biblio-47a84.appspot.com",
      messagingSenderId: "1076309675005",
    };
    firebase.initializeApp(config);
  }
}