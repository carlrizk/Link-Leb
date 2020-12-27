import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Comment } from '../../common/models/comment';
import {Request } from '../../common/models/request';

@Component({
  selector: 'app-comment-panel',
  templateUrl: './comment-panel.component.html',
  styleUrls: ['./comment-panel.component.scss']
})
export class CommentPanelComponent implements OnInit {

  @ViewChild('cform') commentFormDirective;

  request: Request
  commentsForm: FormGroup;
  comment: Comment;
  
  formErrors = {
    'author': '',
    'comment': ''
  };

  validationMessages = {
    'author' : {
      'required': 'Author Name is required.',
    },
    'comment' : {
      'required': 'Comment is required.'
    }
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.commentsForm = this.fb.group({
      author: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }


}
