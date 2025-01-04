const express = require("express");
const router = express.Router();

const ItemController = require("../controllers/ItemsController");

//Get full items
router.get("/all-items", ItemController.getAllItems);

//Get item by search
router.get("/items", ItemController.getSearchedItems);

//Get item by id
router.get("/items/:id", ItemController.getSingleItem);

module.exports = router;
