
import { z } from "zod";

// Image data type definition
export interface WelcomeImage {
  id: string;
  image: string | File;
  description: string;
}

// Validation schema for welcome image
export const welcomeImageSchema = z.object({
  id: z.string().uuid(),
  image: z.union([z.string(), z.instanceof(File)]),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters"
  }).max(100, {
    message: "Description must not exceed 100 characters"
  })
});
