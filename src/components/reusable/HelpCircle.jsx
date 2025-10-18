import { HelpCircle } from "lucide-react";
import { useState } from "react";

const ToolTip = ({ message, show }) => {
  const [showTooltip, setShowTooltip] = useState(show);
  return (
    <div className="relative inline-block">
      <HelpCircle
        className="w-4 h-4 text-gray-400 cursor-help"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && (
        <div className="absolute left-6 top-0 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-10">
          <div className="absolute -left-1 top-1 w-2 h-2 bg-gray-900 transform rotate-45"></div>
          {message}
        </div>
      )}
    </div>
  );
};

export default ToolTip;
