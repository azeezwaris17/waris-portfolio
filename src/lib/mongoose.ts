import mongoose from "mongoose";

/**
 * MongoDB connection helper for Next.js (App Router).
 *
 * Why this exists:
 * - In dev, Next can hot-reload modules and re-run route handlers multiple times.
 * - Without caching, you'd create many Mongo connections and eventually hit limits.
 */

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var __mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.__mongooseCache ?? {
  conn: null,
  promise: null,
};

global.__mongooseCache = cached;

export async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error("Missing environment variable: MONGODB_URI");
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    // Keep options minimal/stable: Mongoose v8 uses sane defaults.
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
