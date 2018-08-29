import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.6727508965637!2d-96.60698403482556!3d32.72132253098881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ebacb88952ed1%3A0xb1d57810c5d1353a!2sRose+Gardens%2C+Balch+Springs%2C+TX+75180%2C+USA!5e0!3m2!1sen!2sgh!4v1535584630706"
        width="100%"
        height="500"
        frameBorder="0"
        allowfullscreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
