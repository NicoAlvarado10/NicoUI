export const SecondaryButton = ({ label }) => {
    return (
      <button
        className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg border border-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
        aria-label={label}
      >
        {label}
      </button>
    );
  };