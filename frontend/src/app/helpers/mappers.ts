import { UserDto } from '../../../../shared/dto/user.dto';
import { SocialMedia } from '../common/models/social-media.model';
import { User } from '../common/models/user.model';

export default class Mapper {
    static UserDto_User(userDto: UserDto): User {
        return {
            id: userDto.id,
            username: userDto.username,
            description: userDto.description,
            displayName: userDto.displayName,
            avatar: userDto.avatar,
            socialMedias: [SocialMedia.Nil]
        };
    }
}
