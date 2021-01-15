import React, { useState, useEffect } from "react";
// Components
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

export default function App() {
  // Images States
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(
    () => {
      // fetching data from the API
      fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      )
        // transforming to json
        .then((res) => res.json())
        // retrieving the results
        .then((data) => {
          setImages(data.hits);
          setIsLoading(false);
        })
        // Catching errors
        .catch((err) => console.log(err));
    },
    // method will run when this state/dependency is updated
    [term]
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center text-indigo-500 font-semibold mx-auto mt-16">
        Photo Gallery
      </h1>
      <ImageSearch setSearch={(term) => setTerm(term)} />

      {
        /* If search returns no images */
        !isLoading && images.length === 0 && (
          <h1 className="text-6xl text-center mx-auto mt-32 sm:mx-auto">
            No Images Found.
          </h1>
        )
      }

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32 sm:mx-auto">
          Loading...
        </h1>
      ) : (
        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 gap-4">
          {images.map((image) => {
            return <ImageCard key={image.id} image={image} />;
          })}
        </div>
      )}
    </div>
  );
}
