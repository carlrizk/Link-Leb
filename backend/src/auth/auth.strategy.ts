import { CallbackError } from "mongoose";
import { Strategy } from "passport-local";
import { UserModel } from "../schemas/user.schema"

export default new Strategy(
    (username, password, done) => {
        UserModel.findOne({ username: username }).exec((err: CallbackError, user: any) => {
            if (err) {
                console.error(err)
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (user.password != password) {
                return done(null, false)
            }
            return done(null, user)
        })
    }
)
