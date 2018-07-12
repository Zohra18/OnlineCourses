import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LessonSchema = new Schema({
  title:      {type:String, required:true},
  text:       {type:String, required:true},
  difficulty: {type:String, required:true},
  image:      {type:String, required:true},
  author:     {type:Schema.Types.ObjectId, ref:'User'},
  comments:   {type:Schema.Types.ObjectId, ref:'Comment'}
})

const Lesson = mongoose.model('Lesson', LessonSchema);
export { Lesson };
