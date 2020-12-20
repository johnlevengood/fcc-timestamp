const express = require('express')

const router = new express.Router()

router.get('/test', (req,res) => {
    res.status(200).send('hello test')
})

module.exports = router