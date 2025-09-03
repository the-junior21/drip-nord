import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  wilaya: String,
  commune:String,
  address: String,
  size: String,
  color: String,
  quantity: Number,
  delivery: String,
  productId: {type:String,required:true  },
  productName:{type:String},
  status:{type:String,
    enum:["pending","confirmed"],
    default:"pending",
  },
  total:Number,
  createdAt: { type: Date, default: Date.now },

});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
