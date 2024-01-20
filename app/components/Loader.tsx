"use client";

import { BeatLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className='h-[70vh] flex flex-col justify-center items-center '>
      <BeatLoader size={30} color='#eab308' />
    </div>
  );
};
