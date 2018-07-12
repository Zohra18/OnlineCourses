import express from 'express'
import { Lesson } from '../models/lesson'

const LessonRouter = express.Router()

LessonRouter.get('/test', (req, res) => {
  res.send('Here are the courses you can take')
})

//add a new lesson route
LessonRouter.post('/add', (req, res) => {
  const newLesson = new Lesson(req.body)
  newLesson.save((err, lesson) =>{
    if(err) res.send(err)
      res.json(lesson)
  })
})

//get the routes of the lessons
LessonRouter.get('', (req, res) => {
  Lesson.find({}, (err, lesson) => {
    if(err) res.send(err)
      res.json(lesson)
  })
})

LessonRouter.get('/:id', (req, res) => {
  let _id = req.params.id;
  Lesson.findById({_id}, (err, lesson) => {
    if(err) res.send(err)
      res.json(lesson)
  })
})

LessonRouter.put('/:id', (req, res) => {
  Lesson.findById({_id:req.params.id}, (err, lesson) => {
    if(err) res.send(err)
    Object.assign(lesson, req.body).save((err, lesson) => {
        if(err) res.send(err)
          res.json(lesson)
    })
  })
})

LessonRouter.delete('/:id', (req, res) => {
  Lesson.remove({
      _id: req.params.id
    },
      (err, lesson) => {
        if(err) res.send(err)
          res.send('Got a DELETE request...');
  })
})

LessonRouter.post('/comment/add/:id', (req, res) => {
  Lesson.findById(req.params.id, (err, lesson) => {
    if(err) res.send(err)
      const newComment = new Comment(req.body)
      newComment.save((err, comment) => {
        if(err) res.send(err)
          lesson.comments.push(newComment)
          lesson.save((err, comment) => {
            if(err) res.sedn(err)
              res.json({message:'Your comment was successfully added', comment})
          })
      })
  })
})






export { LessonRouter }
