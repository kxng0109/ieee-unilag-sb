import { Router } from "express";
import { body } from "express-validator";
import { subscribeUser } from "../controllers/newsletter";

const router = Router();

router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please provide a valid email address")
      .normalizeEmail(),
  ],
  subscribeUser,
);

export default router;
