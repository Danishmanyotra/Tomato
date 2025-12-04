import mongoose from "mongoose";

export const connectDB = async()=> {
    await mongoose.connect('mongodb+srv://danishmanyotra_db_user:pRapAtsx43w9E8nH@cluster0.a3daym2.mongodb.net/food-del').then(()=>console.log("DB connected"));
}
