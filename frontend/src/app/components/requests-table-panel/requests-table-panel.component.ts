import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Request } from '../../models/request.model';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
import { RequestService } from 'src/app/services/request.service';
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
    private router: Router,
    private requestService: RequestService,
    private spinnerService: SpinnerService
  ){}

  ngOnInit(): void { }

  viewDetails(id: string): void {
    console.log(id);
    this.spinnerService.show();
    this.requestService.getRequest(id).subscribe(res => {
    this.router.navigate(["/requests/"+id]);},
    (err: HttpErrorResponse) => {},
      () => {
        this.spinnerService.hide();
      }
    
    )
  }

}
