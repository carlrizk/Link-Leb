import { IconDto } from "./icon.dto";

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
    type: string;
    comment: string;
}

export interface NeedTypeDto {
    id: string;
    name: string;
    icon: IconDto;
}