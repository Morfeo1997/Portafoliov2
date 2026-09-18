import { useState } from 'react';
import Img2 from '../../assets/images/profile-images/profile-2.jpeg'
import Img9 from '../../assets/images/profile-images/profile-9.png'

const ProfileImage = () => {
  
  const images: string[] = [
  	Img9,
    Img2,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div 
      onClick={handleImageClick}
      className="cursor-pointer relative w-80 h-80 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        src={images[currentImageIndex]}
        alt="Profile"
        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

export default ProfileImage;
