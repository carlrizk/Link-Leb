import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AreasConfig } from 'src/app/config/area.config';
import { GendersConfig } from 'src/app/config/gender.config';
import { NeedType } from 'src/app/models/need.model';

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

  constructor(private route: ActivatedRoute) {
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

    console.log(needsControls);

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
    console.log(this.requestForm.value);
  }

}
