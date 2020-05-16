import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../service/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {

  constructor(private comments: CommentsService) { }



  type = ['Жахливо', 'Терпимо', 'Нормально', 'Чудово', 'Неймовірно'];
  selected = this.type.length-1;
  diss = false;
  comment = {
    name: '',
    rating: this.type[this.selected],
    massage: ''
  }
  AllComments: any;

  ngOnInit(): void {
    this.comments.getAllComments()
      .subscribe(comm =>{
        this.AllComments = comm;
      })  }

  success() {
    this.diss = true;
    this.comments.postComments(this.comment).subscribe(comm =>{
      console.log(comm)
    })
    console.log(this.comment);
    this.comments.getAllComments()
      .subscribe(comm =>{
        this.AllComments = comm;
      })
  }

  getIndex(i: number) {
    this.comment.rating = this.type[i]
  }
}
