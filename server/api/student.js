const router = require('express').Router();
const { Student, Campus } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: { all: true },
    });
    res.json(students);
  } catch (err) {
    next(err);
  }
});

router.get('/:studentId', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.studentId, {
      include: { model: Campus },
    });
    if (student) res.json(student);
    else next();
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.json(newStudent);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
