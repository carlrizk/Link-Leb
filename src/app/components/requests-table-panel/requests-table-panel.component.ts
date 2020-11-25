import { Component, Input, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Request } from 'src/app/common/models/request.model';

@Component({
  selector: 'app-requests-table-panel',
  templateUrl: './requests-table-panel.component.html',
  styleUrls: ['./requests-table-panel.component.scss']
})
export class RequestsTablePanelComponent implements OnInit {

  @Input() title = 'Placeholder Title';
  @Input() requests: Request[] = [Request.Nil];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'area'];

  previousIcon = faChevronLeft;
  nextIcon = faChevronRight;

  constructor() { }

  ngOnInit(): void { }

}
