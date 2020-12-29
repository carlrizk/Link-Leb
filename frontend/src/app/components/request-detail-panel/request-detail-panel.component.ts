import { Component, Input, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Request } from '../../models/request.model';


@Component({
  selector: 'app-request-detail-panel',
  templateUrl: './request-detail-panel.component.html',
  styleUrls: ['./request-detail-panel.component.scss']
})
export class RequestDetailPanelComponent implements OnInit {

  bookrmarkIcon = faBookmark;

  @Input() request: Request;

  bookmarked = false;

  constructor() { }

  ngOnInit(): void {}

  bookmarkRequest(): void {
    this.bookmarked = true;
  }

  unbookmarkRequest(): void {
    this.bookmarked = false;
  }

}
