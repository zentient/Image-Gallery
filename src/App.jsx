import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";

export default function App() {
  // Images States
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => {
          return <ImageCard key={image.id} image={image} />;
        })}
      </div>
    </div>
  );
}
