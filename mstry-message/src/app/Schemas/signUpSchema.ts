import {z} from 'zod';


export const usernameValidation = z.

string()
.min(2, "minimum 2 caratcers")
.max(20 , "Max 20 caratcers ")
.regex(/^[a-zA-Z0-9_]{3,16}$/, "username must contain special caracters")


export const signUpSchema  = z.object({
    username : usernameValidation,
    email : z.string() .email({message: "invalid email"}),
    password: z.string() .min(6,{message: "  Password must be more then 6  caraters "}) .max(10,{message: "Password should be less then 10 caraters"}) 
})