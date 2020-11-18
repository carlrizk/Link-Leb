import { SocialMediaType } from './social-media-type.model';

export interface SocialMedia {
    type: SocialMediaType;
    label: string;
    url: string;
}
