import { z } from "zod";

// const MAX_FILE_SIZE = 5000000;
// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

export const settingSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  block_path: z.string(),
});

export const notificationSchema = z.object({
  notification_email: z.coerce
    .string()
    .transform((val) => (val === "on" ? true : false)),
  notification_sms: z.coerce
    .string()
    .transform((val) => (val === "on" ? true : false)),
  notification_push: z.coerce
    .string()
    .transform((val) => (val === "on" ? true : false)),
  id: z.number(),
});

export const ImageSchema = z.object({
  image: z.any(),
  id: z.number(),
});
