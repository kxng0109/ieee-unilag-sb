const Subscriber = require("../models/Subscriber");
const {validationResult} = require("express-validator");

// @desc    Register a new subscriber
// @route   POST /api/newsletter/signup
// @access  Public

exports.subscribeUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            success: false, errors: errors.array()
        });
    }

    const {email} = req.body;

    try{
        const subscriber = await Subscriber.create({email});

        res.status(201).json({
            success: true,
            data: subscriber,
            message: "Successfully subscribed to the newsletter!"
        });
    }catch (err){
        if(err.code === 11000){
            return res.status(400).json({
                success: false,
                message: "This email is already subscribed to the newsletter!"
            });
        }
    }

    res.status(500).json({
        success: false,
        message: "Something went wrong"
    });
}
