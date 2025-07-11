const express=require('express');
const router=express.Router();
const bookingController=require('../../controllers/busBookingController/bookingsController');

router.post('/add',bookingController.postBookings);

module.exports=router;