const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter Description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter Price"],
    maxLength: [8, "Price may not be exceed 8 Characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: [true, "Please enter Public Id"],
      },
      url: {
        type: String,
        required: [true, "Please enter URL"],
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter Category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter Stock"],
    maxLength: [4, "Stock may not exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Product", productSchema);