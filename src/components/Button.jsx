function Button({ text, textSize, border }) {
  return (
    <button
      className={`inline-flex items-center ${textSize} border-${border} bg-transparent text-black py-1 px-2 font-sans focus:outline-none border-amber-700 hover:text-amber-700 rounded text-base mt-4 md:mt-0`}
    >
      {text}
    </button>
  );
}

export default Button;
