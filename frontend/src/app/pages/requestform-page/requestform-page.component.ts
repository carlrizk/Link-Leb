import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AreasConfig } from 'src/app/config/area.config';
import { GendersConfig } from 'src/app/config/gender.config';
import { NeedsConfig } from 'src/app/config/needs.config';

@Component({
  selector: 'app-requestform-page',
  templateUrl: './requestform-page.component.html',
  styleUrls: ['./requestform-page.component.scss']
})
export class RequestformPageComponent implements OnInit {

  requestForm: FormGroup;
  genderTypes: string[] = GendersConfig;
  area: string[] = AreasConfig;
  needs: string[] = NeedsConfig;

  constructor() {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {

    const needsControls: { [key: string]: FormControl } = {};
    NeedsConfig.forEach(needType => {
      needsControls[needType] = new FormControl(false);
      needsControls[needType + '-comments'] = new FormControl('');
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
    console.log(this.requestForm.value);
  }

}