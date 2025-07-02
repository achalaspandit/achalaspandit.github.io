import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence

const ExperienceCard = ({ experience, onClick, x, y, alignment, isSelected, isMobile, isExpanded }) => {
  const { id, role, company, duration, description } = experience;

  if (isMobile) {
    return (
      <motion.div
        layout // Crucial for animating layout changes
        className={`
          bg-green-100 dark:bg-darkCard text-primary dark:text-background
          rounded-lg shadow-md p-4 w-full max-w-sm mx-auto relative
          font-body text-center
          transition-all duration-300 ease-in-out cursor-pointer
          ${isExpanded ? 'border-2 border-accent dark:border-orange-300' : ''}
        `}
        onClick={() => onClick(id)}
        // Initial and animate for the card itself when it appears in the stack
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="font-semibold text-xl leading-tight mb-1 text-center">{role}</h4>
        <p className="text-base opacity-80">{company}</p>
        <p className="text-sm opacity-80">{duration}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              layout // Animate changes to this div's layout (height)
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{
                opacity: { duration: 0.2 },
                height: { type: "spring", stiffness: 400, damping: 30 }, // Spring for height
                marginTop: { duration: 0.3 }
              }}
              className="text-lg text-gray-800 dark:text-gray-200 font-body text-left whitespace-pre-line border-t border-primary dark:border-darkBackground pt-4 mt-4"
            >
              {description}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    );
  }

  // Original SVG-based rendering for non-mobile (landscape)
  const cardWidth = 300; 
  const cardOffsetX = -(cardWidth / 2);

  const dotRadius = isSelected ? 16 : 12;

  const cardHeightEstimate = 90; 
  const trailStrokeWidth = 25; // Width of the path trail
  const minClearance = 15; // Minimum space between the dot and the card

  let cardOffsetY;
  if (alignment === 'top') {
    cardOffsetY = -(dotRadius + (trailStrokeWidth / 2) + minClearance + cardHeightEstimate);
  } else { // alignment === 'bottom'
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