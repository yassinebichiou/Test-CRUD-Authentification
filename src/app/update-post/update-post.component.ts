import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModifierService } from '../modifier.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  titreParam: any
  postTab = []
  postFound: any
  postFormModified: any
  index: any
  change: any
  // a: any
  // b: any
  // c: any
  d: any
  constructor(private route: ActivatedRoute, private updateService: ModifierService) { }

  ngOnInit(): void {
    this.titreParam = this.route.snapshot.paramMap.get('titre')
    console.log(this.titreParam);
    this.postTab = JSON.parse(localStorage.getItem("postTab")) || []
    this.postFound = this.postTab.find(element => element.titre == this.titreParam)
    this.index = this.postTab.indexOf(this.postFound)
    console.log(this.index);


    console.log(this.postFound);

    this.postFormModified = new FormGroup({
      titre: new FormControl(this.postFound.titre),
      discription: new FormControl(this.postFound.discription),
      categorie: new FormControl(this.postFound.categorie),
      date: new FormControl(this.postFound.date),

    })
    this.d = JSON.parse(localStorage.getItem("postTab")) || []
  }


  modifier(a: any, b, c) {
    a = this.d
    // a = JSON.parse(localStorage.getItem("postTab")) || []
    b = this.index
    c = this.postFormModified.value
    this.updateService.spliceTab(a, b, c)
    console.log(a);
    localStorage.setItem("postTab", JSON.stringify(a));
  }




}
