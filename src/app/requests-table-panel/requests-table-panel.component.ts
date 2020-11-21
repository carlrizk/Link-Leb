import { Component, Input, OnInit } from '@angular/core';
import { Request } from '../common/models/request.model';
import { RequestTableColumnDefinition } from './request-table-column-definition';

@Component({
  selector: 'app-requests-table-panel',
  templateUrl: './requests-table-panel.component.html',
  styleUrls: ['./requests-table-panel.component.scss']
})
export class RequestsTablePanelComponent implements OnInit {

  @Input() title: string;
  @Input() requests: Request[];
  @Input() columns: RequestTableColumnDefinition[];

  constructor() { }

  ngOnInit(): void {
    this.title = 'Accepted Requests';
    this.columns = [
      {
        name: '#',
        evaluation: (req) => req.id
      },
      {
        name: 'First Name',
        evaluation: (req) => req.firstName
      },
      {
        name: 'Last Name',
        evaluation: (req) => req.lastName
      }
    ];

    this.requests = [
      {
        id: '1',
        firstName: 'Carl',
        lastName: 'Rizk',
        area: 'Beirut',
        needs: []
      },
      {
        id: '1',
        firstName: 'Carl',
        lastName: 'Rizk',
        area: 'Beirut',
        needs: []
      }
    ];
  }

}
