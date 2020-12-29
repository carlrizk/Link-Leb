import { IconDto } from "./icon.dto";
import { RequestDto } from "./request.dto";

export interface UserDto {
    id: string;
    username: string;
    description: string;
    displayName: string;
    avatar: string;
    socialMedias: SocialMediaDto[];
    bookmarkedRequest: RequestDto[];
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