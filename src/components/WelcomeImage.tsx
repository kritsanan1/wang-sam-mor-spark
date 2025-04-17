import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { WelcomeImage as WelcomeImageType, welcomeImageSchema } from '@/types/imageTypes';
interface WelcomeImageProps {
  image: string | File;
  description?: string;
  onError?: (error: Error) => void;
}
const WelcomeImage: React.FC<WelcomeImageProps> = ({
  image,
  description = "Experience the beauty of วังสามหมอ through our captivating imagery and discover the wonders waiting for you.",
  onError
}) => {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const validateAndProcessImage = async () => {
      try {
        setLoading(true);

        // Validate image data if we have an ID and description
        // This is a simplified validation as we only have the image in props
        if (typeof image === 'string') {
          setImageUrl(image);
        } else if (image instanceof File) {
          // Create object URL for File object
          const url = URL.createObjectURL(image);
          setImageUrl(url);

          // Clean up object URL when component unmounts or image changes
          return () => URL.revokeObjectURL(url);
        }
      } catch (err) {
        console.error("Image validation or processing failed:", err);
        setError(err instanceof Error ? err : new Error("Unknown error processing image"));

        // Notify user
        toast.error("Failed to load image");

        // Call the onError callback if provided
        if (onError) {
          onError(err instanceof Error ? err : new Error("Unknown error processing image"));
        }
      } finally {
        setLoading(false);
      }
    };
    validateAndProcessImage();
  }, [image, description, onError]);
  if (error) {
    return <div className="w-full min-h-[300px] bg-wang-lightGray flex items-center justify-center rounded-lg">
        <p className="text-wang-darkGray text-lg">ไม่สามารถแสดงรูปภาพได้</p>
      </div>;
  }
  return <div className="relative w-full overflow-hidden rounded-lg">
      {/* Loading skeleton */}
      {loading && <div className="absolute inset-0 bg-wang-lightGray animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-wang-orange border-t-transparent rounded-full animate-spin"></div>
        </div>}
      
      {/* Image container with animation */}
      
    </div>;
};
export default WelcomeImage;