import React from "react";

const SkillsCard = ({ icon, title, progress, imageUrl }) => {
  return (
    <div className="group text-white bg-[#284f62] bg-[-webkit-radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)] bg-[radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)] shadow-lg rounded-lg p-3 flex flex-row items-center text-sm hover:bg-gradient-to-r from-[#ff7f50] to-[#ff6347] hover:scale-[1.025] transform duration-300 ease-in-out cursor-pointer">
      {imageUrl ? (
        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md mr-3">
          <img src={imageUrl} alt={title} className="w-10 h-auto object-cover" />
        </div>
      ) : (
        <div className="mr-4 text-2xl text-white">{icon}</div>
      )}
      <div className="flex-1">
        <h3 className="text-sm font-semibold mb-1">{title}</h3>
        {progress !== undefined && (
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#7a9aad] group-hover:bg-[#e8a498] h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-sm font-semibold text-white ml-2">{progress}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsCard;
