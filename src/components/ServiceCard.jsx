import React from "react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 transition hover:border-indigo-300">

      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-indigo-600">
        <Icon size={22} />
      </div>

      <h3 className="mb-3 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-6 h-px w-full bg-slate-100"></div>
    </div>
  );
};

export default ServiceCard;
