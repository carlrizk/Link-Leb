import { Component, Input, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic-component/dynamic-component';

@Component({
  selector: 'app-span-wrapper',
  templateUrl: './span-wrapper.component.html',
  styleUrls: ['./span-wrapper.component.scss']
})
export class SpanWrapperComponent implements DynamicComponent, OnInit {

  data: any;

  constructor() { }

  ngOnInit(): void {}

}
