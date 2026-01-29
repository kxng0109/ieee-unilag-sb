import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import Subscriber from "../models/subscriber";

// @desc    Register a new subscriber
// @route   POST /api/newsletter/signup
// @access  Public
export const subscribeUser = async (
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { email } = req.body as { email?: string };
  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });

  try {
    const subscriber = await Subscriber.create({ email });
    return res.status(201).json({
      success: true,
      data: subscriber,
      message: "Successfully subscribed to the newsletter!",
    });
  } catch (err: any) {
    if (err?.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "This email is already subscribed to the newsletter!",
      });
    }
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};
