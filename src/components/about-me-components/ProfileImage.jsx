import { useState } from 'react';
import Img1 from '../../assets/images/profile-images/profile-1.png'
import Img2 from '../../assets/images/profile-images/profile-2.jpeg'
import Img3 from '../../assets/images/profile-images/profile-3.png'
import Img4 from '../../assets/images/profile-images/profile-4.png'
import Img5 from '../../assets/images/profile-images/profile-5.png'
import Img6 from '../../assets/images/profile-images/profile-6.png'


const ProfileImage = () => {
  
  const images = [
    Img6,
    Img2,
    Img3,
    Img4,
    Img5,
    Img1,
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
