import { Component, Input, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Request } from '../../models/request.model';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  viewDetails(id: string): void {
    this.router.navigate(['/requests/', id]);
  }

}
