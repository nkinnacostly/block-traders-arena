import { z } from "zod";

export const settingSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  block_path: z.string(),
  //   username: z.string(),
  //   password: z
  //     .string()
  //     .min(8, { message: "Password is too short" })
  //     .max(20, { message: "Password is too long" }),
});
