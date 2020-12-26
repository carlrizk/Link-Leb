import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Request, Gender, Area, Needs } from '../common/models/request';

@Component({
  selector: 'app-requestform-page',
  templateUrl: './requestform-page.component.html',
  styleUrls: ['./requestform-page.component.scss']
})
export class RequestformPageComponent implements OnInit {

  @ViewChild('rform') requestFromDirective;

  requestForm: FormGroup;
  request: Request;
  gender = Gender;
  area = Area;
  needs = Needs;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }


  createForm(): void {
    this.requestForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mothername: ['', Validators.required],
      fathername: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: [new Date(), Validators.required],
      telnum: ['', Validators.required],
      area: ['', Validators.required],
      address: ['', Validators.required],
      needs: [''],
      needscomments: [''],
    });
  }

  onSubmit(): void {
    this.request = this.requestForm.value;
    console.log(this.request);
    this.requestForm.reset({
      firstname: '',
      lastname: '',
      mothername: '',
      fathername: '',
      gender: '',
      dateOfBirth: new Date(),
      telnum: '',
      area: '',
      address: '',
      needs: '',
      needscomments: ''
    });
    this.requestFromDirective.resetForm();
  }

}