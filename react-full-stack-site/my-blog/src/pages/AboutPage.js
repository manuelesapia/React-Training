import { FaStar } from "react-icons/fa";
import React, { useState } from 'react';

const AboutPage = () => {
    const createArray = (length) => [
        ...Array(length)
      ];
      function Star({selected = false, onSelect}){
        return <FaStar color={selected ? "red" : "gray"} 
        onClick={onSelect}
        />;
      }
      function StarRating( {totalStars=5} ){
        const [selectedStars, setSelectedStars]
        = useState(0);
        return (
        <>
         <h1>this is the About page!</h1>
         <p>rete your experience</p>
         <br/>
          {createArray(totalStars).map((n, i) => (
          <Star key={i} 
          selected={selectedStars > i} 
          onSelect={() => setSelectedStars(i + 1)}/>
          ))}
          <br/>
          <p>{selectedStars} of {totalStars}</p>
        </>
       )
      }
    return <StarRating totalStars={5}/>;
}

export default AboutPage;