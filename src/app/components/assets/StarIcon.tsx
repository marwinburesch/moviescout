import React from 'react';

type StarIconProps = {
  iconState: 'active' | 'inactive' | 'halfActive';
};

const StarIcon = (
  props: React.SVGProps<SVGSVGElement> & StarIconProps
): JSX.Element => {
  const iconStateMap = {
    active: (
      <linearGradient id="grad1">
        <stop offset="100%" stop-color="var(--color-primary)" />
        <stop offset="100%" stop-color="var(--color-primary)" />
        <stop offset="50%" stop-color="var(--text-secondary)" />
        <stop offset="100%" stop-color="var(--text-secondary)" />
      </linearGradient>
    ),
    inactive: (
      <linearGradient id="grad1">
        <stop offset="0%" stop-color="var(--color-primary)" />
        <stop offset="0%" stop-color="var(--color-primary)" />
        <stop offset="0%" stop-color="var(--text-secondary)" />
        <stop offset="100%" stop-color="var(--text-secondary)" />
      </linearGradient>
    ),
    halfActive: (
      <linearGradient id="grad1">
        <stop offset="0%" stop-color="var(--color-primary)" />
        <stop offset="50%" stop-color="var(--color-primary)" />
        <stop offset="50%" stop-color="var(--text-secondary)" />
        <stop offset="100%" stop-color="var(--text-secondary)" />
      </linearGradient>
    ),
  };

  return (
    <svg height="24" viewBox="0 0 24 24" width="24" {...props}>
      <defs>{iconStateMap[props.iconState]}</defs>
      <path
        fill="url(#grad1)"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
};

export default StarIcon;
