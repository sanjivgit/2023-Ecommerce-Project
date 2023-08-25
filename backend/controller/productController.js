const porductModel = require("../model/productModel")

//// Create Product
exports.createProduct = async (req, res, next) => {
    try {
        let product = await porductModel.create(req.body);
        product && res.status(200).json({
            messages: "product created successfully.",
            product
        })
    } catch (error) {
        console.log(error)
    }
}


exports.getAllProduct = (req, res) => {
    res.status(200).json({
        response: "route working fine!"
    })
}