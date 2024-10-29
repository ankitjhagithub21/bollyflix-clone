import { useEffect, useState } from 'react';
import axios from 'axios';

const useMultipleImageUpload = (images) => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const uploadImages = async () => {
      if (!images || images.length === 0) return;

      setLoading(true);
      const uploadedUrls = [];

      for (const image of images) {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'movie-app'); // Your preset

        try {
          const res = await axios.post(
            `https://api.cloudinary.com/v1_1/dqkagqhg2/image/upload`,
            formData
          );
          uploadedUrls.push(res.data.secure_url); // Store the uploaded image URL
        } catch (err) {
          console.error('Error uploading image:', err);
        }
      }

      setUrls(uploadedUrls);
      setLoading(false);
    };

    uploadImages();
  }, [images]); // Add 'images' as a dependency

  return { urls, loading };
};

export default useMultipleImageUpload;
