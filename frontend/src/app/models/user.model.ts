import { SocialMedia } from './social-media.model';

export class User {
    id: string;
    username: string;
    displayName: string;
    description: string;
    avatar: string;
    socialMedias: SocialMedia[];
}

