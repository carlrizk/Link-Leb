import { SocialMedia } from './social-media.model';

export class User {
    static readonly Nil: User = {
        displayName: 'N/A',
        description: 'N/A',
        avatar: 'assets/logo.png',
        socialMedias: [SocialMedia.Nil]
    };

    displayName: string;
    description: string;
    avatar: string;
    socialMedias: SocialMedia[];
}

