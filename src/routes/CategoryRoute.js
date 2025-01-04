const express = require('express');
const router = express.Router();

const CategoryController = require("../controllers/CategoryControl")

router.get('/categories/:category', CategoryController.getCategory);

module.exports = router;