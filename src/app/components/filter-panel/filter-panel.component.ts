import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Request, Area, Needs } from '../../common/models/request';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @ViewChild('fform') filterDirective;
  filter: FormGroup
  area = Area;
  needs = Needs;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.filter = this.fb.group({
      ID: [''],
      area: [''],
      needs: [''],
    });
  }

}

