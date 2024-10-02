const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem.js');
// const MenuItem = require('./models/MenuItem');


router.post('/',async (req,res)=>{
    try{
        const data = req.body

        const newMenuItem = new MenuItem(data);
         
        const response = await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})
router.get('/:ingredient', async (req, res) => {
    try {
        const ingredient = req.params.ingredient;
        
        if (ingredient === 'sweet' || ingredient === 'spicy' || ingredient === 'sour') {
            const response = await MenuItem.find({ taste: ingredient });
            console.log('Response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid ingredient type' });
        }
    } catch (err) {
        // Corrected logging from 'arr' to 'err'
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;
