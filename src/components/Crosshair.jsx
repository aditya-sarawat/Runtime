const Crosshair = ({ position = "top-left" }) => {
  const coords = {
    "top-left": "-top-[6px] -left-[3.5px]",
    "top-right": "-top-[6px] -right-[3.5px]",
    "bottom-left": "-bottom-[7px] -left-[3.5px]",
    "bottom-right": "-bottom-[7px] -right-[3.5px]"
  };
  return (
    <span className={`absolute font-mono text-[9px] text-charcoal select-none pointer-events-none ${coords[position] || ""}`}>
      +
    </span>
  );
};

export default Crosshair;
