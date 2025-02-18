/* eslint-disable react/prop-types */
const Button = ({ text }) => {
  return (
    <button className="bg-white text-gray-800 px-6 py-2 rounded-full shadow-lg hover:bg-blue-100 transition transform hover:scale-105 border-2 border-blue-200">
      {text}
    </button>
  );
};

export default Button;
