import { SocialMedia } from './social-media.model';

export interface User {
    displayName: string;
    description: string;
    avatar: string;
    socialMedias: SocialMedia[];
}
