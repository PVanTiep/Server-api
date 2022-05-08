const LedController = require("../controllers/ledController");

const router = require("express").Router();

router.post("/",LedController.addLed);

router.get("/",LedController.getAllLed);

router.get("/:id",LedController.getALed);

router.put("/:id",LedController.updateLed);

router.delete("/:id",LedController.deleteLed);

module.exports = router;