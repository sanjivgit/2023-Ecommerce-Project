const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"]
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
        maxLength: [6, "Price can't exceed 6 characters"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            publicId: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product category"]
    },
    stock: {
        type: Number,
        default: 1,
        maxLength: [4, "Stock can't exceed 4 characters"]
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ]
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("products", productSchema)