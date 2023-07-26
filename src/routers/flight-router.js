const express = require('express')
const Flight = require('../models/flight')
const router = express.Router()


router.post('/flights',async (req,res)=>{
    const flight = new Flight(req.body)
    try{ await flight.save()
        res.status(201).send(flight)}
    catch (e){res.status(400).send(e)}
    })

    router.get('/flights/:dist', async (req,res)=>{
        const dist= req.params.dist
        const udist= dist[0].toUpperCase()+ dist.slice(1)
              try{
          const flight = await Flight.find({distination:udist})
          if (!flight){return res.status(404).send()}
             res.send(flight)
         }
      catch(e){  res.status(500).send() }
     })

router.get('/flights', async (req,res)=>{
        try{ const flight= await Flight.find({})
             res.send(flight)}
             catch (e){res.status(500).send()}
        })

router.delete('/flights/:id', async(req,res)=>{
            try{
                const flight = await Flight.findByIdAndDelete(req.params.id)
                if(!flight){res.status(404).send()}
                res.send(flight)
            }
            catch(e){res.status(500).send(error)}
        })
        
        module.exports= router