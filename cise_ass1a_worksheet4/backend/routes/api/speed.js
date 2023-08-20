const express = require('express');
const router = express.Router();

// Load speed model
const Speed = require('../../models/speedmod.js');

// @route GET api/speed/test
// @description tests speed route
// @access Public
router.get('/test', (req, res) => res.send('speed route testing!'));

// @route GET api/speed
// @description Get all speed
// @access Public
router.get('/', (req, res) => {
  Speed.find()
    .then(speeds => res.json(speeds))
    .catch(err => res.status(404).json({ nospeedfound: 'No speed data found' }));
});

// @route GET api/speed/:id
// @description Get single speed by id
// @access Public
router.get('/:id', (req, res) => {
  Speed.findById(req.params.id)
    .then(speed => res.json(speed))
    .catch(err => res.status(404).json({ nospeedfound: 'No speed data found' }));
});

// @route POST api/speed
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Speed.create(req.body)
    .then(speed => res.json({ msg: 'Speed Data added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this speed data' }));
});

// @route PUT api/speed/:id
// @description Update speed data
// @access Public
router.put('/:id', (req, res) => {
  Speed.findByIdAndUpdate(req.params.id, req.body)
    .then(speed => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route DELETE api/speed/:id
// @description Delete speed by id
// @access Public
router.delete('/:id', (req, res) => {
  Speed.findByIdAndRemove(req.params.id, req.body)
    .then(speed => res.json({ mgs: 'Speed data entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such speed data' }));
});

module.exports = router;