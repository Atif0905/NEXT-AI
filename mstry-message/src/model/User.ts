import mongoose,{Schema, Document} from "mongoose";

// We are using extends Document becouse we are creating Documnets 
 export interface Message extends Document {
    content:String;
    createdAt:Date;
}

const MessageSchema : Schema<Message> = new Schema({
   content:{
    type: String,
    required: true
   },
   createdAt : {
    type: Date,
    require: true,
    default:Date.now,
   }
}) ;


export interface User extends Document{
    username:String;
    email:String;
    password:String;
    verifyCode:String;
    verifyCodeExp:Date;
    isVarified:boolean;
    isAccptingMessage:boolean;
    messages:Message[]
}

const UserSchema : Schema<User> = new Schema({
    username:{
     type: String,
     required: [true, "User name is required"],
     trim: true,
     unique:true
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/ , "please use an valid email address"]
       },
       password:{
        type: String,
        required:  [true, "Password is required"]
       },
       verifyCode:{
        type: String,
        required:  [true, "Code is required"]
       },
       verifyCodeExp:{
        type: Date,
        required:  [true, "Code Exp is required"]
       },
       isVarified:{
        type: Boolean,
        default:false
       },
       isAccptingMessage:{
        type: Boolean,
        required: true
       },
       messages :[MessageSchema]
 }) ;

 const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema) 


 export default UserModel;