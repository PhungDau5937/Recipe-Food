const mongoose = require("mongoose");
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: {
    type: String,
    requied: true,
  },
  /* optional: {
        type: String,
        requied: true,
    }, */
  quantity: {
    type: String,
    requied: true,
  },
});

const commentSchema = new Schema({
  user: {
    type: String,
    requied: true,
  },
  comment: {
    type: String,
    requied: true,
  },
});

const moreSchema = new Schema({
  prep_time: {
    type: String,
    requied: true,
  },
  cook_time: {
    type: String,
    requied: true,
  },
  servings: {
    type: String,
    requied: true,
  },
  difficulty: {
    type: String,
    requied: true,
  },
  source: {
    type: String,
    requied: true,
  },
});

const ItemSchema = new Schema({
  menuId: {
    type: Number,
    requied: true,
  },
  name: {
    type: String,
    requied: true,
  },
  thumbnail_image: {
    type: String,
    requied: true,
  },
  category: {
    type: String,
    requied: true,
  },
  instructions: {
    type: String,
    requied: true,
  },
  tags: [String],
  ingredients: {
    type: [ingredientSchema],
    requied: true,
  },
  comments: {
    type: [commentSchema],
    requied: true,
  },
  more: {
    type: [moreSchema],
    requied: true,
  }, 
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item