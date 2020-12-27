import { SocialMediaDto, SocialMediaTypeDto, UserDto } from "../../shared/dto/user.dto";
import { ISocialMedia, ISocialMediaType, IUser } from "./schemas/user.schema";

export default class Mapper {

    static MapUser(user: IUser): UserDto {
        const result: UserDto = {
            id: user.id || "",
            username: user.username,
            description: user.description,
            displayName: user.displayName,
            avatar: user.avatar,
            socialMedias: user.socialMedias.map(sm => Mapper.MapSocialMedia(sm))
        }
        return result
    }

    static MapSocialMedia(socialMedia: ISocialMedia): SocialMediaDto {
        const result = {
            url: socialMedia.url,
            type: Mapper.MapSocialMediaType(socialMedia.socialMediaType)
        }
        return result;
    }

    static MapSocialMediaType(socialMediaType: ISocialMediaType): SocialMediaTypeDto {
        const result = {
            name: socialMediaType.name,
            icon: { prefix: socialMediaType.icon[0], iconName: socialMediaType.icon[1] }
        };
        return result;
    }
}