import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ placeholder, options, icon: Icon, value, onChange}) => {
  const [open, setOpen] = useState(false);
  

  const handleSelect = (option) => {
    if (onChange) onChange(option); // send value to RHF
    setOpen(false);
  };



  return (
    <div className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full h-14 flex items-center justify-between gap-3 rounded-lg border border-neutral-700 bg-neutral-900 px-4 text-sm"
      >
        <div className="flex items-center gap-2">
          {/* Left Icon */}
          {Icon && (
            <Icon className="h-4 w-4 text-neutral-400 shrink-0" />
          )}

          {/* Text */}
          <span className={value ? "text-white" : "text-neutral-400"}>
            {value || placeholder}
          </span>
        </div>

        {/* Arrow */}
        <ChevronDown
          className={`h-4 w-4 text-neutral-400 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute z-20 mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-900 shadow-xl">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {handleSelect(option)}}
              className="cursor-pointer px-4 py-3 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

