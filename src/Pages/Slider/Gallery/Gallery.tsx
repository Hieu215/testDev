import React from 'react';
import one from '../../../assets/gallery/1.png';
import two from '../../../assets/gallery/2.png';
import three from '../../../assets/gallery/3.png';
import four from '../../../assets/gallery/4.png';
import five from '../../../assets/gallery/5.png';
import six from '../../../assets/gallery/6.png';
import seven from '../../../assets/gallery/7.png';

import mobileOne from '../../../assets/mobileGallery/1.png';
import mobileTwo from '../../../assets/mobileGallery/2.png';
import mobileThree from '../../../assets/mobileGallery/3.png';
import mobileFour from '../../../assets/mobileGallery/4.png';
import mobileFive from '../../../assets/mobileGallery/5.png';
import mobileSix from '../../../assets/mobileGallery/6.png';
import mobileSeven from '../../../assets/mobileGallery/7.png';
function Gallery() {
  return (
    <>
      <div className="bg-background-default-color sm:hidden md:hidden lg:flex justify-center">
        <div className="m-m-36-32-0-28 flex justify-center">
          <div className="w-max-width flex-col flex justify-center">
            <h1 className="text-center text-tx-cl-121212 font-bold text-f-45 leading-l-h-68 uppercase">
              Packer pen Gallery
            </h1>
            <div className="p-p-40 grid grid-cols-4 grid-rows-10 gap-2">
              <img src={one} alt="error" className="col-start-1 row-start-2 row-span-3 col-span-1" />
              <img src={two} alt="error" className="col-start-2 row-start-1 row-span-5 col-span-2" />
              <img src={three} alt="error" className="col-start-4 row-start-2 row-span-3 col-span-1" />
              <img src={four} alt="error" className="col-start-1 row-start-5 row-span-5 col-span-1 " />
              <img src={five} alt="error" className="col-start-2 row-start-6 row-span-5 col-span-2" />
              <img src={six} alt="error" className="col-start-4 row-start-4 row-span-4 col-span-1 " />
              <img src={seven} alt="error" className="col-start-4 row-start-8 row-span-3 col-span-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background-default-color sm:flex md:flex lg:hidden justify-center m-mt-60">
        <div className="">
          <div className="w-maximun-width ">
            <h1 className="text-center text-tx-cl-121212 font-bold text-f-30 leading-l-h-45 uppercase">
              Packer pen Gallery
            </h1>
            <div className="p-pb-24 grid grid-cols-4 grid-rows-14 gap-1">
              <img src={mobileOne} alt="error" className="col-start-1 row-start-1 row-span-2 col-span-2" />
              <img src={mobileTwo} alt="error" className="col-start-3 row-start-1 row-span-4 col-span-4" />
              <img src={mobileThree} alt="error" className="col-start-1 row-start-3 row-span-2 col-span-2" />
              <img src={mobileFour} alt="error" className="col-start-1 row-start-5 row-span-4 col-span-4" />
              <img src={mobileFive} alt="error" className="col-start-1 row-start-10 row-span-4 col-span-4" />
              <img src={mobileSix} alt="error" className="col-start-1 row-start-13 row-span-2 col-span-2 " />
              <img src={mobileSeven} alt="error" className="col-start-3 row-start-13 row-span-2 col-span-2 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
