const express = require('express')
const Hotel = require ('../models/hotel')
const router = new express.Router()


router.post('/hotels',async (req,res)=>{
    const hotel = new Hotel(req.body)
    try{ await hotel.save()
        res.status(201).send(hotel)}
    catch (e){res.status(400).send(e)}
    })

    // router.get('/hotels/:dist', async (req,res)=>{
    //     const dist= req.params.dist
    //     const udist= dist[0].toUpperCase()+ dist.slice(1)
    //           try{
    //       const flight = await Hotel.find({distination:udist})
    //       if (!flight){return res.status(404).send()}
    //          res.send(flight)
    //      }
    //   catch(e){  res.status(500).send() }
    //  })

router.get('/hotels', async (req,res)=>{
        try{ const hotel= await Hotel.find({})
             res.send(hotel)}
             catch (e){res.status(500).send()}
        })

router.delete('/hotels/:id', async(req,res)=>{
            try{
                const hotel = await Hotel.findByIdAndDelete(req.params.id)
                if(!hotel){res.status(404).send()}
                res.send(hotel)
            }
            catch(e){res.status(500).send(error)}
        })
        
        module.exports= router