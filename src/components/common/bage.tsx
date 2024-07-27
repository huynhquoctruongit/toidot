interface BageProps {
  color?: string;
  children?: React.ReactNode;
  className?: string;
}

const colors: any = {
  "teritary-06": "bg-teritary-06/10 text-teritary-06 border-teritary-06",
  "teritary-03": "bg-teritary-03/10 text-teritary-03 border-teritary-03",
};
const Bage = ({ color = "teritary-06", children, className }: BageProps) => {
  const colorClass = colors[color];
  return (
    <div
      className={`flex items-center border rounded-full w-fit caption p-2 ${colorClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Bage;
