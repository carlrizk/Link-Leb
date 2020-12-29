import { Component, Input, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { SpinnerService } from 'src/app/services/spinner.service';
import { UserService } from 'src/app/services/user.service';
import { Request } from '../../models/request.model';

@Component({
  selector: 'app-request-detail-panel',
  templateUrl: './request-detail-panel.component.html',
  styleUrls: ['./request-detail-panel.component.scss']
})
export class RequestDetailPanelComponent implements OnInit {

  bookrmarkIcon = faBookmark;

  @Input() request: Request;

  isBookmarked = false;

  constructor(
    private userService: UserService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.isBookmarked = this.userService.isBookmarked(this.request);
  }

  bookmarkRequest(): void {
    this.spinnerService.show();
    this.userService.bookmark(this.request).subscribe(() => {
      this.isBookmarked = true;
    },
      (err) => {
        this.spinnerService.hide();
        console.log(err);
      },
      () => {
        this.spinnerService.hide();
      }
    );
  }

  unbookmarkRequest(): void {
    this.spinnerService.show();
    this.userService.unbookmark(this.request).subscribe(() => {
      this.isBookmarked = false;
    },
      (err) => {
        this.spinnerService.hide();
        console.log(err);
      },
      () => {
        this.spinnerService.hide();
      }
    );
  }

}
