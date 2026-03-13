// Button.jsx
import React from "react";

// Props: text (button label), onClick (function), type (button type), className (extra Tailwind classes)
function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;