import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAngular';


  postForm: new FormGroup ({
    tittre: new FormControl(),
    discription: new FormControl(),
    categorie: new FormControl(),
    date: new FormControl(),
  })
}


