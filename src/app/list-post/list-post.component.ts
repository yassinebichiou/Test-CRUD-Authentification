import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  postTab = []
  constructor() { }

  ngOnInit(): void {

    this.postTab = JSON.parse(localStorage.getItem("postTab")) || []
    console.log(this.postTab);


  }

  delete(i) {

    this.postTab.splice(i, 1)
    localStorage.setItem("postTab", JSON.stringify(this.postTab));


  }


}
