import React from "react";

type IconProps = {
  className?: string;
};

export const CatIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2c-5.33 4-8 6.67-8 10 0 3.31 2.69 6 6 6h4c3.31 0 6-2.69 6-6 0-3.33-2.67-6-8-10zm0 15c-2.21 0-4-1.79-4-4 0-1.42.73-2.67 1.85-3.39.59.27 1.31.39 2.15.39.83 0 1.56-.13 2.15-.39 1.12.72 1.85 1.97 1.85 3.39 0 2.21-1.79 4-4 4zm-2-6.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
  </svg>
);

export const DogIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18 4c0-1.1-.9-2-2-2s-2 .9-2 2v1h-3c-1.1 0-2 .9-2 2v4.62l-1.29 1.29c-.63.63-.19 1.71.7 1.71v6.38c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-6.38c.89 0 1.34-1.08.71-1.71L21 11.62V7c0-1.1-.9-2-2-2h-3V4zm-6 10.05l1.88-1.88c.39-.39 1.02-.39 1.41 0l1.88 1.88c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L15 15.29l-.76.76c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41z" />
  </svg>
);

export const BirdIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 4C9 4 7 6 7 9c0 1.31.53 2.67 1.5 3.67L6 15v1h2l2-2.03V14h2v-1.03l2 2.03h2v-1l-2.5-2.33c.97-1 1.5-2.36 1.5-3.67 0-3-2-5-5-5zm-1 11h2v5h-2z" />
  </svg>
);

export const FishIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-10c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z" />
    <path d="M4.5 11.5c1.5-1.5 3.5-2.5 5.5-2.5v-2c-3 0-6 1.5-8 4l2.5.5zm15 2c-2 2.5-5 4-8 4v-2c2 0 4-1 5.5-2.5l2.5.5z" />
  </svg>
);

export const HamsterIcon: React.FC<IconProps> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2s-2 .9-2 2H8c-1.1 0-2 .9-2 2v2c-1.1 0-2 .9-2 2v5h1.33L6 18h1l.67-2h8.67l.66 2h1l.67-2H20v-5c0-1.1-.9-2-2-2zm-4-2v2h-3V7h3zM8 7h3v2H8V7zm-2 4h12v3H6v-3z" />
  </svg>
);
