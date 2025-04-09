import { z } from "zod";

// const MAX_FILE_SIZE = 5000000;
// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

export const settingSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone: z.string({ message: "Number is Required" }),
  block_path: z.string(),
});

export type SettingSchema = z.infer<typeof settingSchema>;

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

export type NotificationSchema = z.infer<typeof notificationSchema>;

export const ImageSchema = z.object({
  image: z.any(),
  id: z.number(),
});

export type ImageSchemaType = z.infer<typeof ImageSchema>;
