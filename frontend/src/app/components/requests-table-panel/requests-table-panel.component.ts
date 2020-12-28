import { Component, Input, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Request } from '../../models/request.model';


@Component({
  selector: 'app-requests-table-panel',
  templateUrl: './requests-table-panel.component.html',
  styleUrls: ['./requests-table-panel.component.scss']
})
export class RequestsTablePanelComponent implements OnInit {

  @Input() requests: Request[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'area', 'needs', 'dateOfSubmit', 'viewDetails'];

  previousIcon = faChevronLeft;
  nextIcon = faChevronRight;

  constructor() { }

  ngOnInit(): void { }

}
