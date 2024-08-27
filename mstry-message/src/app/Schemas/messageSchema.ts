import { z } from "zod";

export const messageSchema = z.object({
   content: z.string()
   .min(10,{message:"minimum 10 car"})
   .max(300, {message:"no more then 300 car"})
})