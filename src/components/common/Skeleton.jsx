import React from 'react';

const Skeleton = ({ type = 'line', count = 1, className = '' }) => {
  const getSkeletonClass = () => {
    switch (type) {
      case 'circle':
        return 'w-12 h-12 rounded-full';
      case 'rectangle':
        return 'w-full h-24 rounded-lg';
      case 'line':
      default:
        return 'w-full h-4 rounded';
    }
  };

  return (
    <div className="animate-pulse">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className={`bg-gray-200 ${getSkeletonClass()} ${className} ${i !== count - 1 ? 'mb-2' : ''}`}
        />
      ))}
    </div>
  );
};

export default Skeleton;