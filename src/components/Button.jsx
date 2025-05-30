function Button({ bgColor, children }) {
  //   const hover = bgColor.concat("/75");
  //   console.log(hover);
  return (
    <button
      type="submit"
      className={`place-self-center justify-self-center font-black px-10 py-4 rounded-4xl ${bgColor} text-white cursor-pointer transition-colors duration-[0.3s] ease-in`}
    >
      {children}
    </button>
  );
}

export default Button;
