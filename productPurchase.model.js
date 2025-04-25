import mongoose from 'mongoose'

const productPurchaseModel=mongoose.Schema(
    {
productName:String,
productLine:String,
productScale:String,
productVendor:String,
productDescription:String,
quantityInStock:Number,
buyPrice:Number,
MSRP:Number,
image:String,
productID:Number
    },
    {
        timestamps:true
    }
)

export default mongoose.model('product',productPurchaseModel)