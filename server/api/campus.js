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
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
