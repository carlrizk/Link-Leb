import { Type } from '@angular/core';

export interface DynamicComponent {
    data: any;
}

export interface DynamicComponentInput {
    component: Type<any>;
    data: any;
}
