import { useState } from "react";

const fallbackSrc = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "?")}&size=128&background=6366f1&color=fff&bold=true`;

const CompanyLogo = ({
  src,
  alt,
  className = "size-12 rounded-full object-cover",
}) => {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <img
      src={useFallback ? fallbackSrc(alt) : src || fallbackSrc(alt)}
      alt={alt || "Company"}
      className={className}
      onError={() => setUseFallback(true)}
    />
  );
};

export default CompanyLogo;
