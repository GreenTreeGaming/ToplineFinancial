export const ToplineLogo = () => {
  return (
    <div className="mb-8 flex flex-col items-center justify-center space-y-2">
      <img
        src="/icon.png"
        alt="Topline Financial Logo"
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
      />
      <h1 className="text-xl sm:text-2xl font-semibold text-blue-900 tracking-tight">
        Topline Financial Quiz
      </h1>
    </div>
  );
};
