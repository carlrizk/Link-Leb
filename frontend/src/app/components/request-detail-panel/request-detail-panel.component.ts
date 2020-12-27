import { Component, Input, OnInit } from '@angular/core';
import {Request, Needs, Area, Gender} from '../../common/models/request';
import { Location } from '@angular/common';

@Component({
  selector: 'app-request-detail-panel',
  templateUrl: './request-detail-panel.component.html',
  styleUrls: ['./request-detail-panel.component.scss']
})
export class RequestDetailPanelComponent implements OnInit {
  
  @Input() requests: Request[] = [Request.Nil];

  public name: string = 'Bookmark';
  public title: string = 'Not Bookmarked';
 

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  setfunction(): void {
    if(this.name === 'Bookmark') { 
      this.name = 'Remove from Bookmarks'
      this.title = 'Bookmarked'
    } else {
      this.name = 'Bookmark'
      this.title = 'Not Bookmarked'
    }
  }

  goBack(): void {
    this.location.go("requests");
  }

}
