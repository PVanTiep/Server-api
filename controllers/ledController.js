const {Led}= require("../model/model");

const LedController = {
    // ADD data
    addLed: async(req,res)=>{
        try {
            const newLed = new Led(req.body);
            const saLed = await newLed.save();
            res.status(200).json(saLed);
        } catch (error) {
            console.error(error);
            res.status(500).json(error.msg)
        }
    },
    getAllLed: async (req, res) => {
        try {
          const led = await Led.find();
          res.status(200).json(led);
        } catch (err) {
          res.status(500).json(err);
        }
    },
    getALed: async (req, res) => {
        try {
          const device = await Led.findById(req.params.id);
          res.status(200).json(device);
        } catch (err) {
          res.status(500).json(err);
        }
    },
    updateLed: async (req, res) => {
        try {
          const device = await Led.findById(req.params.id);
          await device.updateOne({ $set: req.body });
          res.status(200).json("Updated successfully!");
        } catch (err) {
          res.status(500).json(err);
        }
    },
    updateLedByName: async (req, res) => {
        try {
          const device = await Led.findById(req.params.id);
          await device.updateOne({ $set: req.body });
          res.status(200).json("Updated successfully!");
        } catch (err) {
          res.status(500).json(err);
        }
    },
    deleteLed: async (req, res) => {
        try {
          await Led.findByIdAndDelete(req.params.id);
          res.status(200).json("Deleted successfully!");
        } catch (err) {
          res.status(500).json(err);
        }
    },
};

module.exports = LedController;