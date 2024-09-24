const Spin = () => {
  return (
    <div className="absolute left-0 top-0 z-[99] h-full w-full">
      <div className="flex size-full items-center justify-center bg-white backdrop-blur-[1px]">
        <div className="circle"></div>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Spin;
