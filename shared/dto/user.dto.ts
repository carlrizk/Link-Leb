export interface UserDto {
    id: string;
    username: string;
    description: string;
    displayName: string;
    avatar: string;
    socialMedias: SocialMediaDto[];
}

export interface SocialMediaDto {
    type: SocialMediaTypeDto;
    url: string;
}

export interface SocialMediaTypeDto {
    name: string;
    icon: { prefix: string, iconName: string };
}