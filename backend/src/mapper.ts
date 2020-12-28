import { SocialMediaDto, SocialMediaTypeDto, UserDto } from "../../shared/dto/user.dto";
import { NeedDto, NeedTypeDto, RequestDto } from "../../shared/dto/request.dto";
import { INeed, IRequest, INeedType,RequestModel } from "./schemas/request.schema";
import { ISocialMedia, ISocialMediaType, IUser, UserModel } from "./schemas/user.schema";

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

    static MapRequest(request: IRequest): RequestDto {
        const result: RequestDto = {
            id: request.id || "",
            firstName: request.firstName,
            lastName:request.lastName ,
            motherName: request.motherName,
            fatherName: request.fatherName,
            gender: request.gender,
            dateOfBirth:request.dateOfBirth,
            telNumber : request.telNumber,
            area: request.area,
            dateOfSubmit: request.dateOfSubmit,
            Needs: request.Needs.map(sm => Mapper.MapNeed(sm))
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
    static MapNeed(need: INeed): NeedDto {
        const result = {
            url: need.url,
            type: Mapper.MapNeedType(need.needType)
        }
        return result;
    }
    static MapNeedType(needType: INeedType): NeedTypeDto {
        const result = {
            name: needType.name,
        };
        return result;
    }
}