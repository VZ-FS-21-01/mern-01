const express = require('express')
const router = express.Router()

const apiControllers = require('../controllers/apiControllers')

router.get('/', apiControllers.api_index_get)
router.post('/', apiControllers.api_index_post)
router.get('/:id', apiControllers.api_detail_get)
router.put('/:id', apiControllers.api_detail_put)
router.delete('/:id', apiControllers.api_detail_delete)

module.exports = router