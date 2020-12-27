import { Component, Input, OnInit } from '@angular/core';
import {Request, Needs, Area, Gender} from '../../common/models/request';

@Component({
  selector: 'app-request-detail-panel',
  templateUrl: './request-detail-panel.component.html',
  styleUrls: ['./request-detail-panel.component.scss']
})
export class RequestDetailPanelComponent implements OnInit {
  
  @Input() requests: Request[] = [Request.Nil];

  constructor() { }

  ngOnInit(): void {
  }

}
