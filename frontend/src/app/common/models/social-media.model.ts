import { SocialMediaType } from './social-media-type.model';

export class SocialMedia {
    static readonly Nil: SocialMedia = {
        type: SocialMediaType.Nil,
        url: 'localhost'
    };

    type: SocialMediaType;
    url: string;
}
