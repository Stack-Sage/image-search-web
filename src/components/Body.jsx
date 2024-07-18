import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Search from './Search';
import Tilt from 'react-parallax-tilt';
import Footer from './Footer';

const Body = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem('images'));
    if (savedImages) {
      setImages(savedImages);
    }
  }, []);

  useEffect(() => {
    const searchTerm = new URLSearchParams(location.search).get('query');
    if (searchTerm) {
      handleSearchSubmit(searchTerm);
    }
  }, [location.search]);

  const handleSearchSubmit = async (keyword) => {
    if (keyword.trim()) {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=xo06x9tZy9N548QS34Yyv3OUbLtuJzCTe7G8V8vzo_g`);
        const data = await response.json();
        setImages(data.results);
        localStorage.setItem('images', JSON.stringify(data.results));
        navigate(`?query=${keyword}`);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
  };

  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'downloaded_image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen overflow-y-auto m-5 w-full p-10 gap-10 fixed top-10 pb-24  bottom-10 rounded-md">
      <div className="max-w-lg lg:w-full md:w-auto ">
        <Search onSubmit={handleSearchSubmit} />
      </div>
      <div className="images-container m-10 p-10 grid w-full h-screen md:grid-cols-3 max-lg:grid-cols-5 lg:grid-cols-4 lg:gap-12 md:gap-8 sm:gap-6 mt-4 sm:grid-cols-2   overflow-y-auto" >
        {images.map((image) => (
          <Tilt
            key={image.id}
            className="image-item relative"
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.1}
            style={{ marginBottom: '20px' }}
          >
            <img src={image.urls.small} alt={image.alt_description} className="w-full h-full object-cover rounded-md " />
            <button
              onClick={() => handleDownload(image.urls.full)}
              className="absolute bottom-1 right-1 p-2 shadow-md rounded-full invert bg-white"
            >
              <img src="/src/assets/eye.svg" alt="eye" className="w-4 h-4 hover:scale-125 animate-pulse transform ease-in-out " />
            </button>
          </Tilt>
        ))}

       
      </div>
      <div className="foot w-full absolute bottom-0  ">
        <Footer/>
        </div>
    </div>

  
  );
};

export default Body;
