import { SocialMedia } from './social-media.model';
import { Request } from './request.model';

export class User {
    id: string;
    username: string;
    displayName: string;
    description: string;
    avatar: string;
    socialMedias: SocialMedia[];
    bookmarkedRequests: Map<string, Request>;
}

