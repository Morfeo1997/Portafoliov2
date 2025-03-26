import { useState } from 'react';
import Img1 from '../../assets/images/profile-images/profile-1.png'
import Img2 from '../../assets/images/profile-images/profile-2.jpeg'


const ProfileImage = () => {
  
  const images = [
    Img1,
    Img2,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
};

export default ProfileImage;
