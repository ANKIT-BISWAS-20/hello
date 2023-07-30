// // eslint-disable-next-line no-unused-vars
// import React, { useEffect } from 'react';
// import './Load.css'

// const MegatronixComponent = () => {
//   const animationDuration = 1000;

//   // Function to open the doors
//   const openDoors = () => {
//     const leftDoor = document.getElementById("left-door");
//     const rightDoor = document.getElementById("right-door");

//     leftDoor.style.transform = "translateX(-100%)";
//     rightDoor.style.transform = "translateX(100%)";
//   };

//   useEffect(() => {
//     // Automatically open the doors after the component mounts
//     const timer = setTimeout(openDoors, animationDuration);

//     // Clean up the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       <div id="particles-js"></div>
//       <div className="wrapper">
//         <div id="left-door" className="door">
//           <div className="shape"></div>
//           <div className="shape"></div>
//           <div id="left-knob" className="knob"></div>
//         </div>
//         <div id="right-door" className="door">
//           <div className="shape"></div>
//           <div className="shape"></div>
//           <div id="right-knob" className="knob"></div>
//         </div>
//         <div className="fashionable-text">
//           <h1>MEGATRONIX</h1>
//         </div>

//         <div className="shooting-stars-container">
        //   <div className="star"></div>
        //   <div className="star"></div>
        //   <div className="star"></div>
        //   <div className="star"></div>
        //   <div className="star"></div>
        //   <div className="star"></div>
        //   <div className="star"></div>
        //   <div className="star"></div>
        //   <div className="star"></div>
        //   <div className="star"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MegatronixComponent;

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Load.css';

const MegatronixComponent = () => {
  const animationDuration = 1000;
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    const openDoorsTimer = setTimeout(() => {
      setDoorsOpen(true);
    }, animationDuration);

    return () => clearTimeout(openDoorsTimer);
  }, []);

  return (
    <div>
      <div id="particles-js"></div>
      <div className="wrapper">
        <div className={`door ${doorsOpen ? 'open' : ''}`} id="left-door">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="knob" id="left-knob"></div>
        </div>
        <div className={`door ${doorsOpen ? 'open' : ''}`} id="right-door">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="knob" id="right-knob"></div>
        </div>
        <div className="fashionable-text">
          <h1>MEGATRONIX</h1>
        </div>

        <div className="shooting-stars-container">
        <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
    </div>
  );
};

export default MegatronixComponent;

