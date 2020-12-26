import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Area, Needs } from '../../common/models/request';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @ViewChild('fform') filterDirective;
  filter: FormGroup;
  area = Area;
  needs = Needs;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.filter = this.fb.group({
      ID: [''],
      area: [''],
      needs: [''],
    });
  }

}

