const mongoose=require('mongoose');
const schema=mongoose.Schema;
const listingSchema=new Schema({
  title:string,
  description:string,
  Image:string,
  price:Number,
  country:string,
  location:string,


});
const listing=mongoose.model("listing",listingSchema);
module.exports=listing;