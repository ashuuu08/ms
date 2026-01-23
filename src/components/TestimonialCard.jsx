import React from "react";

const TestimonialCard = ({ name, role, feedback, image }) => {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-lg transition transform hover:-translate-y-1">
      <p className="text-slate-300 italic">"{feedback}"</p>
      <div className="flex items-center gap-4 mt-2">
        {image && <img src={image} alt={name} className="w-10 h-10 rounded-full" />}
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-slate-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
