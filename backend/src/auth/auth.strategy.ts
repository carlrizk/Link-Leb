import { CallbackError } from "mongoose";
import { Strategy } from "passport-local";
import User from "../schemas/user.schema"

export default new Strategy(
    function (username, password, done) {
        User.findOne({ username: username }, (err: CallbackError, user: any) => {
                if (err) {
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
