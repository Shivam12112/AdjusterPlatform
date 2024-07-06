const Button = ({ children, onClick }) => {
    return (
      <button onClick={onClick} className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:text-white">
        {children}
      </button>
    );
  };
  
export default Button;
  