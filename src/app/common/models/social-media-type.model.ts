import { IconProp } from '@fortawesome/fontawesome-svg-core';

export class SocialMediaType {
    static readonly Nil: SocialMediaType = {
        name: 'Placeholder',
        icon: ['fas', 'exclamation-triangle']
    };

    name: string;
    icon: IconProp;
}
