import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  username:{type:String, required:true, index:true},
  level:String,
  profileImage:String
})

const User = mongoose.model('User', UserSchema);
export { User };
