

export const PrimaryButton = ({ label}) => {
  return (
    <button
      className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
      aria-label={label}
    >
      {label}
    </button>
  );
};


