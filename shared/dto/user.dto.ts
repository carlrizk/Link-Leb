import { IconDto } from "./icon.dto";

export interface UserDto {
    id: string;
    username: string;
    description: string;
    displayName: string;
    avatar: string;
    socialMedias: SocialMediaDto[];
}

export interface SocialMediaDto {
    type: string;
    url: string;
}

export interface SocialMediaTypeDto {
    id: string;
    name: string;
    icon: IconDto;
}