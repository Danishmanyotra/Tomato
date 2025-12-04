import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async(req,res) => {
try{
    let userId=req.userId;
    let itemId= req.body.itemId;

 let userData = await userModel.findById(userId);
 let cartData = await userData.cartData;
 if(!cartData[itemId])
    {
    cartData[itemId] = 1
 }
 else {
    cartData[itemId] += 1;
 }
 await userModel.findByIdAndUpdate(userId,{cartData});
 res.json({success:true,message:"Added To Cart"});
}
catch(error) {
console.log(error);
res.json({success:false,message:"Add to cart Error"})
}
}

//remove items from user cart
const removeFromCart = async(req,res) => {
try{
    const userId=req.userId;
    const itemId= req.body.itemId;

let userData = await userModel.findById(userId);
let cartData = await userData.cartData;
if(cartData[itemId]>0) {
    cartData[itemId] -=1;

}
await userModel.findByIdAndUpdate(userId,{cartData});
res.json({success:true,message:"Removed From Cart"})
}catch(error) {
    console.log(error);
    res.json({success:false,message:" Removed from cart Error"})

}
}

//fetch user cart data
const getCart= async(req,res) => {
try{
    let userId = req.userId;

let userData = await userModel.findById(userId);
let cartData = await userData.cartData;
res.json({success:true,cartData})
} catch(error) {
console.log(error);
res.json({success:false,message:"Cart Error"});
}
}

export {addToCart,removeFromCart,getCart};