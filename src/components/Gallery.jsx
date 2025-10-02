import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const initialImages = [
  { src: "/images/image1.jpg", title: "Colva Beach", likes: 0 },
  { src: "/images/image2.jpg", title: "Margao City", likes: 0 },
  { src: "/images/image3.jpg", title: "Tambdi Surla", likes: 0 },
  { src: "/images/image4.jpg", title: "Cabo De Rama", likes: 0 },
  { src: "/images/image5.jpg", title: "Margao River", likes: 0 },
  { src: "/images/image6.jpg", title: "Betal Batim Beach", likes: 0 }
];

export default function Gallery() {
  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState(null);

  // Load likes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("galleryLikes");
    if (saved) {
      setImages(JSON.parse(saved));
    }
  }, []);

  // Save likes whenever updated
  useEffect(() => {
    localStorage.setItem("galleryLikes", JSON.stringify(images));
  }, [images]);

  const toggleLike = (index) => {
    const newImages = [...images];
    newImages[index].liked = !newImages[index].liked;
    setImages(newImages);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={img.src}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover"
              onClick={() => setSelectedImage(img)}
            />
            <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 flex justify-between items-center">
              <span>{img.title}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(index);
                }}
                className="flex items-center gap-1"
              >
                <Heart
                  size={20}
                  className={img.liked ? "fill-pink-500 text-pink-500" : "text-white"}
                />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // click outside to close
        >
          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-auto h-auto max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white/80 text-black px-3 py-1 rounded-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}