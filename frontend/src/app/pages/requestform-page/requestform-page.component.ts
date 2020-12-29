import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AreasConfig } from 'src/app/config/area.config';
import { GendersConfig } from 'src/app/config/gender.config';
import { NeedType } from 'src/app/models/need.model';
import { RequestService } from 'src/app/services/request.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { NeedDto, SubmitRequestDto } from '../../../../../shared/dto/request.dto';
import { RequestformPageDialogComponent } from './requestform-page-dialog.component';

@Component({
  selector: 'app-requestform-page',
  templateUrl: './requestform-page.component.html',
  styleUrls: ['./requestform-page.component.scss']
})
export class RequestformPageComponent implements OnInit {

  requestForm: FormGroup;
  genderTypes: string[] = GendersConfig;
  area: string[] = AreasConfig;
  needTypes: Map<string, NeedType>;

  constructor(
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private requestService: RequestService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {

    this.needTypes = this.route.snapshot.data.needTypes;


    this.createForm();
  }

  createForm(): void {

    const needsControls: { [key: string]: AbstractControl } = {};

    this.needTypes.forEach(needType => {
      needsControls[needType.id] = new FormGroup({
        isNeeded: new FormControl(null),
        comments: new FormControl('')
      });
    });

    this.requestForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      mothername: new FormControl('', Validators.required),
      fathername: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dateOfBirth: new FormControl(null, Validators.required),
      telnum: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      needs: new FormGroup(needsControls)
    });
  }

  onSubmit(): void {
    const needValues = this.requestForm.get('needs').value;

    const request: SubmitRequestDto = {
      firstName: this.requestForm.get('firstname').value,
      lastName: this.requestForm.get('lastname').value,
      motherName: this.requestForm.get('mothername').value,
      fatherName: this.requestForm.get('fathername').value,
      gender: this.requestForm.get('gender').value,
      dateOfBirth: this.requestForm.get('dateOfBirth').value,
      telNumber: this.requestForm.get('telnum').value,
      area: this.requestForm.get('area').value,
      address: this.requestForm.get('address').value,
      needs: Object.keys(needValues).filter(n => needValues[n].isNeeded).map(n => {
        const dto: NeedDto = {
          type: n,
          comment: needValues[n].comments
        };
        return dto;
      })
    };

    this.spinnerService.show();
    this.requestService.submitRequest(request).subscribe(() => {
      this.openDialog();
    },
      (err) => {
        console.log(err);
        this.spinnerService.hide();
      },
      () => this.spinnerService.hide()
    );
  }

  openDialog(): void {
    this.dialog.open(RequestformPageDialogComponent).afterClosed().subscribe(_ => {
      this.router.navigate(['/']);
    });
  }

}
