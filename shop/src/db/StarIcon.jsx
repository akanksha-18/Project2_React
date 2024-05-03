import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const componentsMap = {
  AiFillStar: AiFillStar,
  // Add more components as needed
};

const StarIcon = ({ data }) => {
  const StarComponent = componentsMap[data.star];
  return (
    <div>
      {/* Render the component */}
      <StarComponent className={data.starClassName} />
    </div>
  );
};

export default StarIcon;
