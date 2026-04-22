import mongoose, { Schema } from "mongoose";

/**
 * Contact form submissions stored in MongoDB.
 *
 * Notes:
 * - Keep fields minimal and validated at the API boundary (zod).
 * - Store lightweight request metadata for debugging/spam analysis.
 */

const ContactMessageSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
    meta: {
      ip: { type: String, default: null },
      userAgent: { type: String, default: null },
      referer: { type: String, default: null },
    },
  },
  { timestamps: true },
);

export type ContactMessage = mongoose.InferSchemaType<
  typeof ContactMessageSchema
>;

export default (mongoose.models.ContactMessage as mongoose.Model<ContactMessage>) ||
  mongoose.model<ContactMessage>("ContactMessage", ContactMessageSchema);

