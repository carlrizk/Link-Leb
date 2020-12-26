import { FormControl } from '@angular/forms';

export class Request {
    firstname: string;
    lastname: string;
    mothername: string;
    fathername: string;
    gender: string;
    dateOfBirth: Date;
    telnum: number;
    area: string;
    address: string;
    needs: string;
    needscomments: string;
}

export const Needs = ['Medication', 'Food', 'Renovation', 'Other'];
export const Gender = ['Male', 'Female'];
export const Area = ['Beirut', 'Akkar', 'Beqaa', 'Mount Lebanon', 'Nabatieh', 'North Governate', 'South Governate' ];
