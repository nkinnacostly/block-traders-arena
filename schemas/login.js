import { z } from "zod";

export const profileSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});
