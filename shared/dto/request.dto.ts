export interface RequestDto {
    id: string,
    firstName: string,
    lastName: string,
    motherName: string,
    fatherName: string,
    gender: string,
    dateOfBirth: Date,
    telNumber: string,
    area: string,
    dateOfSubmit: Date,
    needs: NeedDto[];
}

export interface NeedDto {
    type: NeedTypeDto;
    comment: string;
}

export interface NeedTypeDto {
    name: string;
}