import mongoose, { Document, Model, Schema } from "mongoose";

export interface ISubscriber extends Document {
  email: string;
  subscribedAt?: Date;
}

const subscriberSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Subscriber: Model<ISubscriber> = mongoose.model<ISubscriber>(
  "Subscriber",
  subscriberSchema,
);

export default Subscriber;
