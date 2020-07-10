const express = require("express");

const router = express.Router();
const Trolley = require("../models/Trolley");



//get all item from emergency trolley
router.get('/', async (req, res) => {
    try {
        let trolley = await Trolley.find();
        res.json(trolley);
    }
    catch (e) {
        res.json({ message: e })
    }
});


//get a single item from emergency trolley
router.get('/:itemID', async (req, res) => {
    try {
        let itemId = req.params.itemID;
        let item = await Trolley.findById(itemId);
        res.json(item);
    }
    catch (e) {
        res.json({ message: e })
    }
});


//Add new item to the emergency trolley
router.post('/', async (req, res) => {

    try {
        const trolley = new Trolley({
            itemName: req.body.itemName,
            quantity: req.body.quantity,
            itemStatus: req.body.itemStatus,
            //expireDate: req.body.quantity,
        });

        const saveItem = await trolley.save();
        res.json({ saveItem });
    }
    catch (e) {
        res.json({ message: e })
    }



});




//updating item data
router.put('/:itemID', async (req, res) => {

    try {
        const itemId = req.params.itemID;
        const updateItem = await Trolley.updateOne({ _id: itemId }, { $set: { itemName: req.body.itemName } })
        res.json({ updateItem });
    }
    catch (e) {
        res.json({ message: e });
    }

});


//Delete item from the emergency trolley
router.delete('/:itemID', async (req, res) => {

    try {
        const itemId = req.params.itemID;
        const deleteItem = await Trolley.deleteOne({ _id: itemId });
        res.json(deleteItem);
    }
    catch (e) {
        res.json({ message: e })
    }

});



module.exports = router;