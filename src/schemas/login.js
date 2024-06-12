import { z } from "zod";

export const profileSchema = z.object({
  //   first_name: z.string(),
  //   last_name: z.string(),
  //   email: z.string().email(),
  //   phone: z
  //     .number({
  //       required_error: "required field",
  //       invalid_type_error: "Enter Phone Number",
  //     })
  //     .min(8)
  //     .max(10),
  //   block_path: z.string(),
  username: z.string(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});
