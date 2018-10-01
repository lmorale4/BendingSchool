const router = require('express').Router();
const { Campus, Student } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: { all: true },
    });
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

router.get('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.campusId, {
      include: { model: Student },
    });

    if (campus) res.json(campus);
    else next();
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.json(newCampus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
