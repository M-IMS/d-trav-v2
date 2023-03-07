import React from "react";

import Lokapin from "../assets/lokapin.png";
import denny_agency from "../assets/denny_agency.png";
import cure_resto from "../assets/cure_resto.png";
import v_point from "../assets/v_point.png";
import tuneHub from "../assets/tuneHub.png";

const SectionFive = () => {
  return (
    <div className="w-auto h-auto mb-10 flex flex-col sm:flex-row">
      <div className="sm:flex items-center">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center px-24 pb-10">
          Official partner
        </h1>
      </div>
      <div className="sm:w-[60rem] grid grid-cols-2 sm:grid-cols-3 gap-10 p-5 bg-gray-100">
        <img src={Lokapin} alt="Lokapin logo" className="justify-self-center" />
        <img
          src={denny_agency}
          alt="Denny Agency logo"
          className="justify-self-center"
        />
        <img
          src={cure_resto}
          alt="Cure Resto logo"
          className="justify-self-center"
        />
        <img
          src={v_point}
          alt="V Point logo"
          className="justify-self-center sm:justify-self-end"
        />
        <img
          src={tuneHub}
          alt="TuneHub logo"
          className="col-span-2 sm:col-span-0 justify-self-center"
        />
      </div>
    </div>
  );
};

export default SectionFive;
