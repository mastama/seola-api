var express = require('express');
var router = express.Router();
var modulController = require('../controllers/modulController.js');

/*
 * GET
 */
router.get('/', modulController.list);

/*
 * GET
 */
router.get('/:id', modulController.show);

/*
 * POST
 */
router.post('/', modulController.create);

/*
 * PUT
 */
router.put('/:id', modulController.update);

/*
 * DELETE
 */
router.delete('/:id', modulController.remove);

module.exports = router;
