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
    res.json(student);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
