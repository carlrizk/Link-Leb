export interface RequestDto {
    id: String,
    firstName: String,
    lastName: String,
    motherName: String,
    fatherName: String,
    gender: String,
    dateOfBirth: Date,
    telNumber : String,
    area: String,
    dateOfSubmit: Date,
    Needs:NeedDto[];
}

export interface NeedDto {
    type: NeedTypeDto;
    url: string;
}

export interface NeedTypeDto {
    name: string;
}