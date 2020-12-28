import { IconProp } from '@fortawesome/fontawesome-svg-core';

export class Need {
    type: NeedType;
    comment: string;
}

export class NeedType {
    id: string;
    name: string;
    icon: IconProp;
}
