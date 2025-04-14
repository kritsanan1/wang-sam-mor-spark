
import { toast } from 'sonner';
import { welcomeImageSchema, WelcomeImage } from '@/types/imageTypes';

/**
 * Validates welcome image data against schema
 * @param imageData The image data to validate
 * @returns Validation result with data or error
 */
export const validateWelcomeImage = (imageData: Partial<WelcomeImage>): {
  valid: boolean;
  data?: WelcomeImage;
  error?: Error;
} => {
  try {
    // Ensure all required fields are present before validation
    if (!imageData.id || !imageData.image || !imageData.description) {
      return { 
        valid: false, 
        error: new Error("Missing required fields") 
      };
    }
    
    const result = welcomeImageSchema.parse(imageData);
    return { valid: true, data: result };
  } catch (error) {
    console.error("Image validation failed:", error);
    return { 
      valid: false, 
      error: error instanceof Error ? error : new Error("Invalid image data") 
    };
  }
};

/**
 * Handles welcome image upload validation and notifies admin of failures
 * @param imageData The image data to validate and process
 * @returns The processed image data or null if invalid
 */
export const processWelcomeImage = (imageData: Partial<WelcomeImage>): WelcomeImage | null => {
  const validationResult = validateWelcomeImage(imageData);
  
  if (!validationResult.valid) {
    // Notify user
    toast.error("Image data is invalid. Please check and try again.");
    
    // In a real app, this would notify admin via API call or other mechanism
    console.error("Admin notification: Image upload failed validation", validationResult.error);
    
    return null;
  }
  
  return validationResult.data!;
};
