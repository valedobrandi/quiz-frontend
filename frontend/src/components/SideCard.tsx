function SideCard({ image = '' , text = '', title = '', style = '' }) {
  return (
      <div className="grid grid-cols-1 gap-16">
        <div
          className={`relative p-4 flex flex-col items-center justify-center 
          ${style} rounded-2xl md:w-full w-[50%] m-auto`}
        >
          <div className="absolute -top-10 -left-4">
            <div className="flex flex-row items-start justify-center space-x-2">
              <p className="text-sm"> {title}</p>
            </div>
          </div>
          <h3 className="flex items-center font-bold mb-2 text-lg">
            <img
              className="w-8 h-8 mr-2 animate-bounce animate-infinite animate-duration-[1000ms]"
              src={image}
              alt="crown picture"
            />
            <span className="text-white text-center">{text}</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="p-3">
              <span className="coiny-regular text-6xl text-[#191d24]">1</span>
            </span>
          </div>
        </div>
      </div>
  );
};

export default SideCard;
