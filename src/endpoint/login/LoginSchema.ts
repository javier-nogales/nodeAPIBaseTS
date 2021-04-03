import Joi from "joi";

class LoginSchema {
    public loginUser = Joi.object({
        id: Joi.string()
               .alphanum()
               .min(4)
               .max(10)
               .required(),
        passwd: Joi.string()
                   .alphanum()
                   .min(4)
                   .required()
    });
}

export default new LoginSchema();

// module LoginSchema {

//     export loginUserSchema = Joi.object({
//         id: Joi.string()
//                .alphanum()
//                .min(4)
//                .required(),
//         passwd: Joi.string()
//                    .alphanum()
//                    .min(4)
//                    .required()
//     });

// }

// const loginUserSchema = Joi.object({
//     id: Joi.string()
//            .alphanum()
//            .min(4)
//            .required(),
//     passwd: Joi.string()
//                .alphanum()
//                .min(4)
//                .required()
// });

