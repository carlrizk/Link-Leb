import { SocialMedia } from './social-media.model';

export class User {
    static readonly Nil: User = {
        id: 'nope',
        username: 'na',
        displayName: 'N/A',
        description: 'N/A',
        avatar: 'assets/logo.png',
        socialMedias: [SocialMedia.Nil]
    };

    id: string;
    username: string;
    displayName: string;
    description: string;
    avatar: string;
    socialMedias: SocialMedia[];
}

