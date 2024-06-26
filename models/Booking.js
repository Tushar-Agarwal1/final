const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    },
    userEmail: {
      type: String,
    },
    tourName:{
        type:String,
        required:true
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    bookAt:{
        type:Date,
        required:true
    }
  },
  { timestamps: true }
);

const Booking=mongoose.model('Booking', bookingSchema);
module.exports=Booking;