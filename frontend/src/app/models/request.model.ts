import { Need } from './need.model';

export class Request {
    id: string;
    firstName: string;
    lastName: string;
    motherName: string;
    fatherName: string;
    gender: string;
    dateOfBirth: Date;
    telNumber: string;
    area: string;
    address: string;
    dateOfSubmit: Date;
    needs: Need[];
}
