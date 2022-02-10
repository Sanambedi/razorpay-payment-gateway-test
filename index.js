const express = require('express');
const Razorpay = require("razorpay")
const app = express()
app.use(express.json())
app.use(express.static("./public"));


app.post("/order",async (req,res) => {
    const amount = req.body.amount
    var instance = new Razorpay({ 
        key_id: 'rzp_test_ywlrYYvQ3lHwnp',
        key_secret: 'Dr9JL6Shi8vVn3oIsLdGLCta' 
    })
    
    res.status(200).json({
        success: true,
        amount,
        order: await instance.orders.create({
            amount: amount * 100,
            currency: "INR",
            receipt: "receipt#1",
            notes: {
                key1: "value3",
                key2: "value2"
            }
        })
    })
})

app.listen(4000,()=>{
    console.log(`SERVER IS RUNNING AT PORT 4000`)
})