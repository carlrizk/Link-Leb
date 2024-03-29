import { IconProp } from '@fortawesome/fontawesome-svg-core';

export class SocialMedia {
    type: SocialMediaType;
    url: string;
}

export class SocialMediaType {
    id: string;
    name: string;
    icon: IconProp;
}
