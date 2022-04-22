const express = require('express')

const router = express.Router()

const Alien = require('../models/alien')

router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (err) {
        res.send('error - ' + err)
    }
    console.log('get request')
})

router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    } catch (err) {
        res.send('error - ' + err)
    }
    console.log('get request by perticuler id')
})


router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const a1 = await alien.save()
        res.json(a1)
        console.log('posted')
    } catch (err) {
        res.send('Error' + err)
    }

})

router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
        console.log('patch successfully')


    } catch (err) {
        res.send('error')
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)

        const a1 = await alien.remove()
        res.json(a1)
        console.log('delet successfully')


    } catch (err) {
        res.send('error')
    }
})


module.exports = router

