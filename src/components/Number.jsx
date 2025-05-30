function Number({ children }) {
  return (
    <div>
      <div className="w-[1px] h-20 bg-slate300 mx-auto"></div>
      <div className="w-14 h-14 bg-white outline-1 outline-slate300 rounded-full relative mx-auto z-999">
        <span className="font-black text-slate600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}
        </span>
      </div>
    </div>
  );
}

export default Number;
