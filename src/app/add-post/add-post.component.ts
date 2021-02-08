import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postTab = []
  constructor() { }

  ngOnInit(): void {
  }


  postForm = new FormGroup({
    titre: new FormControl(),
    discription: new FormControl(),
    categorie: new FormControl(),
    date: new FormControl(),
  })

  ajouter(form) {
    this.postTab.push(form)
    localStorage.setItem("postTab", JSON.stringify(this.postTab));
    console.log(this.postTab);



  }
}

