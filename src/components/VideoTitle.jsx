const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-5 md:px-12 text-white absolute md:bg-gradient-to-r from-black">
      <h1 className="md:text-5xl text-2xl font-bold">{title}</h1>
      <p className="hidden lg:block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex">
        <button className="md:bg-white text-black py-1 md:p-4 px-8 md:px-12 lg:px-8 text-xl rounded-lg cursor-pointer bg-gray-300 mt-3 md:mt-0">
          Play
        </button>
        <button className="hidden lg:block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
