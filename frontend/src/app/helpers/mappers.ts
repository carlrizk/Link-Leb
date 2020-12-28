import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SocialMediaDto, SocialMediaTypeDto, UserDto } from '../../../../shared/dto/user.dto';
import { SocialMediaType } from '../models/social-media-type.model';
import { SocialMedia } from '../models/social-media.model';
import { User } from '../models/user.model';

export default class Mapper {

    static UserDto_User(userDto: UserDto): User {
        return {
            id: userDto.id,
            username: userDto.username,
            description: userDto.description,
            displayName: userDto.displayName,
            avatar: userDto.avatar,
            socialMedias: userDto.socialMedias.map(sm => Mapper.SocialMediaDto_SocialMedia(sm))
        };
    }

    static SocialMediaDto_SocialMedia(socialMediaDto: SocialMediaDto): SocialMedia {
        return {
            url: socialMediaDto.url,
            type: Mapper.SocialMediaTypeDto_SocialMediaType(socialMediaDto.type)
        };
    }

    static SocialMediaTypeDto_SocialMediaType(socialMediaTypeDto: SocialMediaTypeDto): SocialMediaType {
        return {
            name: socialMediaTypeDto.name,
            icon: socialMediaTypeDto.icon as IconProp
        };
    }
}
