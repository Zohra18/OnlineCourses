require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes_lesson__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);



const { PORT, DB_url } = process.env;

// mongo

__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connect(DB_url);
let db = __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongoDB is working like a bawss');
});

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: false }));

app.use('/lessons', __WEBPACK_IMPORTED_MODULE_1__routes_lesson__["a" /* LessonRouter */]);

app.listen(PORT, () => {
  console.log(`it's work on radio #${PORT} bitches!`);
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_lesson__ = __webpack_require__(5);



const LessonRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

LessonRouter.get('/test', (req, res) => {
  res.send('Here are the courses you can take');
});

//add a new lesson route
LessonRouter.post('/add', (req, res) => {
  const newLesson = new __WEBPACK_IMPORTED_MODULE_1__models_lesson__["a" /* Lesson */](req.body);
  newLesson.save((err, lesson) => {
    if (err) res.send(err);
    res.json(lesson);
  });
});

//get the routes of the lessons
LessonRouter.get('', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_lesson__["a" /* Lesson */].find({}, (err, lesson) => {
    if (err) res.send(err);
    res.json(lesson);
  });
});

LessonRouter.get('/:id', (req, res) => {
  let _id = req.params.id;
  __WEBPACK_IMPORTED_MODULE_1__models_lesson__["a" /* Lesson */].findById({ _id }, (err, lesson) => {
    if (err) res.send(err);
    res.json(lesson);
  });
});

LessonRouter.put('/:id', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_lesson__["a" /* Lesson */].findById({ _id: req.params.id }, (err, lesson) => {
    if (err) res.send(err);
    Object.assign(lesson, req.body).save((err, lesson) => {
      if (err) res.send(err);
      res.json(lesson);
    });
  });
});

LessonRouter.delete('/:id', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_lesson__["a" /* Lesson */].remove({
    _id: req.params.id
  }, (err, lesson) => {
    if (err) res.send(err);
    res.send('Got a DELETE request...');
  });
});

LessonRouter.post('/comment/add/:id', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_lesson__["a" /* Lesson */].findById(req.params.id, (err, lesson) => {
    if (err) res.send(err);
    const newComment = new Comment(req.body);
    newComment.save((err, comment) => {
      if (err) res.send(err);
      lesson.comments.push(newComment);
      lesson.save((err, comment) => {
        if (err) res.sedn(err);
        res.json({ message: 'Your comment was successfully added', comment });
      });
    });
  });
});



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lesson; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const LessonSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  difficulty: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: { type: Schema.Types.ObjectId, ref: 'Comment' }
});

const Lesson = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Lesson', LessonSchema);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map