/* eslint-disable react/prop-types */

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-gray-200 w-full font-bold text-gray-800 px-6 py-2 antialiased hover:bg-sky-400 transform hover:text-stone-100 border-1 border-sky-400"
      onClick={onClick}
      style={{ transition: "all 0.35s ease-in", borderRadius: "10px" }}
    >
      {text}
    </button>
  );
};

export default Button;
