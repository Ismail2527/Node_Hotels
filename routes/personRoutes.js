const express = require('express');
const router = express.Router();
const Person = require('./../models/Person.js');

// POST route to create a new person
router.post('/', async (req, res) => {
    try {
        const data = req.body;

        const newPerson = new Person(data);
        const response = await newPerson.save();
        
        console.log('Data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET route for fetching persons by work type
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        
        if (workType === 'chef' || workType === 'manager' || workType === 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('Response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        // Corrected logging from 'arr' to 'err'
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new : true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;
        // const updatedPersonData = req.body;

        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data Deleted');
        res.status(200).json({message:'person Deleted Successfully'});
    }catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

// GET route to fetch all persons
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
