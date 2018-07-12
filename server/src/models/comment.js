import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CommentSchema = new Schema({
  title:  String,
  text:   {type:String, required:true},
  author: {type:Schema.Types.ObjectId, ref:'User'},
  lessons:{type:Schema.Types.ObjectId, ref:'Lesson'}
})

const Comment = mongoose.model('Comment', CommentSchema);
export { Comment };
