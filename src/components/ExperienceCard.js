// src/components/ExperienceCard.js
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience, onClick, x, y, alignment, isSelected }) => {
  const { id, role, company } = experience;

  const cardWidth = 300; 
  const cardOffsetX = -(cardWidth / 2);

  const dotRadius = isSelected ? 16 : 12;


  const cardHeightEstimate = 90; 
  const trailStrokeWidth = 25; // Width of the path trail
  const minClearance = 15; // Minimum space between the dot and the card

  let cardOffsetY;
  if (alignment === 'top') {
    // Path is visually *below* the dot. Card needs to be *above* the dot.
    // Go up from the dot's center by its radius, the trail's half-width, clearance, and card height.
    cardOffsetY = -(dotRadius + (trailStrokeWidth / 2) + minClearance + cardHeightEstimate);
  } else { // alignment === 'bottom'
    // Path is visually *above* the dot. Card needs to be *below* the dot.
    // Go down from the dot's center by its radius, the trail's half-width, and clearance.
    cardOffsetY = (dotRadius + (trailStrokeWidth / 2) + minClearance);
  }


  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* The clickable circle/dot on the path - this is still just visual feedback */}
      <motion.circle
        r={dotRadius}
        className={`
          fill-primary dark:fill-accent
          transition-all duration-300 ease-in-out
          ${isSelected ? 'shadow-lg' : ''}
        `}
        initial={false}
        animate={{ scale: isSelected ? 1.2 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      />
      {isSelected && (
        <motion.circle
          r={dotRadius}
          className="fill-accent dark:fill-darkCard opacity-50"
          initial={{ scale: 1 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.5,
            ease: "easeOut",
            delay: 0.1
          }}
        />
      )}

      {/* The small card with Role and Company name - THIS IS CLICKABLE */}
      <foreignObject
        x={cardOffsetX}
        y={cardOffsetY}
        width={cardWidth}
        height="auto"
        className="overflow-visible"
        onClick={() => onClick(id)}
        style={{ cursor: 'pointer' }}
      >
        <div
          className={`
            bg-green-100 dark:bg-darkCard text-primary dark:text-background
            rounded-md shadow-md p-4
            font-body text-center
            transition-colors duration-300
          `}
          style={{ width: `${cardWidth}px` }}
        >
          <h4 className="font-semibold text-xl leading-tight mb-1">{role}</h4>
          <p className="text-base opacity-80">{company}</p>
          <p className="text-sm opacity-80">{experience.duration}</p>
        </div>
      </foreignObject>
    </g>
  );
};

export default ExperienceCard;