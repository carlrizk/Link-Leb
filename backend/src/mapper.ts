import { SocialMediaDto, SocialMediaTypeDto, UserDto } from "../../shared/dto/user.dto";
import { NeedDto, NeedTypeDto, RequestDto, SubmitRequestDto } from "../../shared/dto/request.dto";
import { INeed, IRequest, INeedType } from "./schemas/request.schema";
import { ISocialMedia, ISocialMediaType, IUser } from "./schemas/user.schema";

export default class Mapper {

    static MapUser(user: IUser): UserDto {
        const result: UserDto = {
            id: user._id,
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
            id: request._id,
            firstName: request.firstName,
            lastName: request.lastName,
            motherName: request.motherName,
            fatherName: request.fatherName,
            gender: request.gender,
            dateOfBirth: request.dateOfBirth,
            telNumber: request.telNumber,
            area: request.area,
            address: request.address,
            dateOfSubmit: request.dateOfSubmit,
            needs: request.needs.map(sm => Mapper.MapNeed(sm))
        }
        return result
    }

    static MapRequestFromDto(request: SubmitRequestDto): any {
        return {
            firstName: request.firstName,
            lastName: request.lastName,
            motherName: request.motherName,
            fatherName: request.fatherName,
            gender: request.gender,
            dateOfBirth: request.dateOfBirth,
            telNumber: request.telNumber,
            area: request.area,
            address: request.address,
            dateOfSubmit: new Date().toUTCString(),
            needs: request.needs.map(n => Mapper.MapNeedFromDto(n))
        }
    }
    static MapNeedFromDto(n: NeedDto): INeed {
        return {
            needType: n.type,
            comment: n.comment
        }
    }

    static MapRequests(requests: IRequest[]): RequestDto[] {
        return requests.map(req => Mapper.MapRequest(req));
    }

    static MapSocialMedia(socialMedia: ISocialMedia): SocialMediaDto {
        return {
            url: socialMedia.url,
            type: socialMedia.socialMediaType._id
        }
    }

    static MapSocialMediaTypes(socialMediaTypes: ISocialMediaType[]): SocialMediaTypeDto[] {
        return socialMediaTypes.map(smt => Mapper.MapSocialMediaType(smt));
    }
    static MapSocialMediaType(socialMediaType: ISocialMediaType): SocialMediaTypeDto {
        return {
            id: socialMediaType._id,
            name: socialMediaType.name,
            icon: socialMediaType.icon
        };
    }

    static MapNeed(need: INeed): NeedDto {
        return {
            comment: need.comment,
            type: need.needType
        }
    }

    static MapNeedTypes(needTypes: INeedType[]): NeedTypeDto[] {
        return needTypes.map(nt => Mapper.MapNeedType(nt))
    }
    static MapNeedType(needType: INeedType): NeedTypeDto {
        return {
            id: needType._id,
            name: needType.name,
            icon: {
                prefix: needType.icon.prefix,
                iconName: needType.icon.iconName
            }
        };
    }
}