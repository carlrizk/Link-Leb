import { AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { DynamicComponent, DynamicComponentInput } from './dynamic-component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit, AfterViewInit {

  @Input() componentInput: DynamicComponentInput;

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentInput.component);
    const componentRef = this.viewContainerRef.createComponent<DynamicComponent>(componentFactory);
    componentRef.instance.data = this.componentInput.data;
  }

}
