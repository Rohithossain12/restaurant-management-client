const LoadingSpinner = () => {
  return (
     <div className="flex items-center justify-center w-full min-h-[calc(100vh-305px)]">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
