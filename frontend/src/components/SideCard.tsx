function SideCard({ image = '' ,title = '', style = '' }) {
  return (
      <div className="grid grid-cols-1 gap-16">
        <div
          className={`relative flex flex-col items-center justify-center 
          ${style} rounded-2xl p-3 w-[50%] m-auto`}
        >
          <div className="absolute -top-10 -left-4">
            <div className="flex flex-row items-start justify-center space-x-2">
              <p className="text-sm"> {title}</p>
            </div>
          </div>
            <img
              className="w-8 h-8 mr-2 -mb-5 animate-bounce animate-infinite animate-duration-[1000ms]"
              src={image}
              alt="crown picture"
            />
          <h3 className="flex items-center font-bold mb-0 text-lg">
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="p-2">
              <span className="coiny-regular text-6xl text-[#191d24]">1</span>
            </span>
          </div>
        </div>
      </div>
  );
};

export default SideCard;
