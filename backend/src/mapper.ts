import UserDto from "../../shared/dto/user.dto";

export default class Mapper {
    
    static MapUser(user: any): UserDto {
        const result: UserDto = {
            id: user.id,
            username: user.username,
            displayName: user.displayName,
            avatar: user.avatar
        }
        return result
    }
}