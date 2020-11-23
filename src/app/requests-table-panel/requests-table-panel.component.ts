import { Component, Input, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Request } from '../common/models/request.model';
import { SpanWrapperComponent } from '../span-wrapper/span-wrapper.component';
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

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'area'];

  previousIcon = faChevronLeft;
  nextIcon = faChevronRight;

  constructor() { }

  ngOnInit(): void {

    this.title = 'Accepted Requests';

    this.requests = [
      {
        id: '1234',
        firstName: 'Carl',
        lastName: 'Rizk',
        area: 'Beirut',
        needs: []
      },
      {
        id: '1235',
        firstName: 'Rola',
        lastName: 'Hadi',
        area: 'Beirut',
        needs: []
      },
      {
        id: '1236',
        firstName: 'Karine',
        lastName: 'Ismail',
        area: 'Beirut',
        needs: []
      }
    ];

    this.columns = [
      {
        name: 'ID',
        cellComponent: (req) => {
          return {
            component: SpanWrapperComponent,
            data: { text: req.id }
          };
        }
      },
      {
        name: 'First Name',
        cellComponent: (req) => {
          return {
            component: SpanWrapperComponent,
            data: { text: req.firstName }
          };
        }
      },
      {
        name: 'Last Name',
        cellComponent: (req) => {
          return {
            component: SpanWrapperComponent,
            data: { text: req.lastName }
          };
        }
      },
      {
        name: 'Area',
        cellComponent: (req) => {
          return {
            component: SpanWrapperComponent,
            data: { text: req.area }
          };
        }
      }
    ];

  }

}
