import { useState, useRef, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

import Pencils from '../../../assets/tabs/pencils.svg';
import markers from '../../../assets/tabs/markers.svg';
import drawingColors from '../../../assets/tabs/drawingColors.svg';
import notebooks from '../../../assets/tabs/notebooks.svg';
import arrowIcon from '../../../assets/tabs/arrowIcon.svg';
import aeroPencil from '../../../assets/tabs/aeroPencil.png';
import castellPencil from '../../../assets/tabs/castellPencil.png';
import architectPencil from '../../../assets/tabs/architectPencil.png';

const data = [
  {
    id: 1,
    name: 'Pencils',
    src: `${Pencils}`,
    h2: 'Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils',
    li1: 'MECHANICAL PENCILS',
    li2: "ARCHITECT'S CHOICE",
    li3: 'EXECUTIVE PENCILS',
    li4: 'ENGRAVABLE PENCILS',
    aeroPencil: `${aeroPencil}`,
    castellPencil: `${castellPencil}`,
    architectPencil: `${architectPencil}`,
  },
  {
    id: 2,
    name: 'Markers',
    src: `${markers}`,
    h2: 'Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils',
    li1: 'MECHANICAL PENCILS',
    li2: "ARCHITECT'S CHOICE",
    li3: 'EXECUTIVE PENCILS',
    li4: 'ENGRAVABLE PENCILS',
    aeroPencil: `${aeroPencil}`,
    castellPencil: `${castellPencil}`,
    architectPencil: `${architectPencil}`,
  },
  {
    id: 3,
    name: 'Drawing Colors',
    src: `${drawingColors}`,
    h2: 'Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils',
    li1: 'MECHANICAL PENCILS',
    li2: "ARCHITECT'S CHOICE",
    li3: 'EXECUTIVE PENCILS',
    li4: 'ENGRAVABLE PENCILS',
    aeroPencil: `${aeroPencil}`,
    castellPencil: `${castellPencil}`,
    architectPencil: `${architectPencil}`,
  },
  {
    id: 4,
    name: 'Notebooks',
    src: `${notebooks}`,
    h2: 'Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils',
    li1: 'MECHANICAL PENCILS',
    li2: "ARCHITECT'S CHOICE",
    li3: 'EXECUTIVE PENCILS',
    li4: 'ENGRAVABLE PENCILS',
    aeroPencil: `${aeroPencil}`,
    castellPencil: `${castellPencil}`,
    architectPencil: `${architectPencil}`,
  },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function TabsComponent() {
  const [open, setOpen] = useState(0);
  const [isHiden, setIsHiden] = useState<boolean>(true);
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const pencilRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setIsHiden(isHiden === true ? false : true);
  };

  const handleAlert = () => {
    alert('all of product');
  };
  window.onresize = () => {
    const getWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (getWidth > 1250 && getWidth < 1280) window.location.reload();
  };

  return (
    <>
      <div className="sm:hidden md:hidden lg:flex m-m-36-32-0-28 flex justify-center">
        <div className="w-max-width flex-col flex justify-center">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl to-background-default-color w-max-width">
              {data.map(({ name, src, id }) => (
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-box-width h-box-height flex justify-center items-center rounded-box-border-radius',
                      selected ? 'bg-background-item' : 'hover:scale-75 cursor-pointer',
                    )
                  }
                  key={id}
                >
                  <div className="flex justify-center w-item-width h-item-height flex-col items-center bg-background-default-color shadow-box-shadow-item rounded-border-item-radius">
                    <div className="bg-background-item rounded-radius flex justify-center w-radius-width h-radius-height">
                      <img src={src} alt={name} />
                    </div>
                    <p className="h-img-item-height">{name}</p>
                  </div>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="p-padding-content bg-background-item h-h-500">
              {data.map(({ h2, id, li1, li2, li3, li4, aeroPencil, castellPencil, architectPencil }) => (
                <Tab.Panel key={id}>
                  <div className="flex flex-row">
                    <div className="w-width-2/5">
                      <div className="w-w-350 h-h-100">
                        <h2 className="text-f-21 font-normal leading-8">{h2}</h2>
                      </div>
                      <div className="m-m-20-0-35-0 w-w-222 h-h-160 font-semibold leading-10 text-f-18 rounded-border-radius-5">
                        <ul style={{ listStyleType: 'inherit' }}>
                          <li>{li1}</li>
                          <li>{li2}</li>
                          <li>{li3}</li>
                          <li>{li4}</li>
                        </ul>
                      </div>

                      <button
                        className="bg-default-color-item w-w-120 h-h-50 hover:opacity-70 text-f-14 font-Poppins text-cl-FFFFFF font-bold leading-10"
                        onClick={() => handleAlert()}
                      >
                        Shop all
                      </button>
                    </div>
                    <div>
                      <span className="flex flex-row border-solid border-boder-3 border-c-ffff w-w-712">
                        <div className="bg-background-default-color w-w-200 h-box-mobile-height flex justify-center content-center flex-wrap rounded-b-18-0-0-18">
                          <p className="font-bold text-f-36 leading-l-h-54 text-tx-cl-F4B840">25% off</p>
                        </div>
                        <p className="text-center w-maximun-width flex items-center m-m-24 leading-l-h-38 font-light text-f-25">
                          Offer Applicable on All Our Pencils
                        </p>
                      </span>
                      <span className="flex flex-row gap-5">
                        <div className="w-w-224 m-m-20-0-40-0 h-h-320 rounded-b-18 bg-background-default-color p-p-10-22-34-22 ">
                          <img src={aeroPencil} alt="error" />
                          <h1 className="font-medium text-f-14 leading-l-h-21 text-tx-cl-000000 text-center">
                            Aero Mechanical Pencil
                          </h1>
                          <span className="flex flex-row gap-3 justify-center items-center">
                            <p className="font-semibold text-tx-cl-000000 leading-l-h-24 text-f-16">$99.00</p>
                            <p className="line-through font-normal text-f-14 leading-l-h-21 text-tx-cl-727272x">
                              $125.00
                            </p>
                          </span>
                        </div>
                        <div className="w-w-224 m-m-20-0-40-0 h-h-320 rounded-b-18 bg-background-default-color p-p-10-22-34-22 ">
                          <img src={castellPencil} alt="error" />
                          <h1 className="font-medium text-f-14 leading-l-h-21 text-tx-cl-000000 text-center">
                            Castell Mechanical Pencil
                          </h1>
                          <span className="flex flex-row gap-3 justify-center items-center">
                            <p className="font-semibold text-tx-cl-000000 leading-l-h-24 text-f-16">$75.00</p>
                            <p className="line-through font-normal text-f-14 leading-l-h-21 text-tx-cl-727272x">
                              $99.00
                            </p>
                          </span>
                        </div>
                        <div className="w-w-224 m-m-20-0-40-0 h-h-320 rounded-b-18 bg-background-default-color p-p-10-22-34-22 ">
                          <img src={architectPencil} alt="error" />
                          <h1 className="font-medium text-f-14 leading-l-h-21 text-tx-cl-000000 text-center">
                            Architect Choice Pencil
                          </h1>
                          <span className="flex flex-row gap-3 justify-center items-center">
                            <p className="font-semibold text-tx-cl-000000 leading-l-h-24 text-f-16">$45.00</p>
                            <p className="line-through font-normal text-f-14 leading-l-h-21 text-tx-cl-727272x">
                              $70.00
                            </p>
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>

      <div className="sm:flex md:flex lg:hidden flex-col bg-background-item p-padding-top">
        <div>
          {data.map(({ name, id, src, h2, li1, li2, li3, li4, aeroPencil, castellPencil, architectPencil }) => (
            <Accordion
              open={open === id}
              key={id}
              className="flex space-x-1 rounded-xl to-background-default-color flex-col gap-8"
            >
              <AccordionHeader
                onClick={() => handleOpen(id)}
                className="h-box-mobile-height border-y-0 items-center rounded-box-border-radius"
              >
                <div className="p-padding-icon flex justify-between w-maximun-width h-box-mobile-height flex-row items-center bg-background-default-color shadow-box-shadow-item rounded-border-item-radius">
                  <div className="flex flex-row gap-5">
                    <div className="bg-background-item rounded-radius flex justify-center items-center w-radius-width h-radius-height">
                      <img src={src} alt={name} className="w-mobile-icon-width h-mobile-icon-height" />
                    </div>
                    <div className="flex items-center">
                      <p className="font-bold text-f-21 leading-l-h-32 w-w-166 h-h-32 flex ">{name}</p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={arrowIcon}
                      alt="arrIcon"
                      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform w-arrow-width`}
                    />
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="h-h-700">
                <div>
                  <div className="m-m-11-37-9-31">
                    <h2 className="font-normal text-f-16 leading-l-h-27 w-maximun-width text-tx-cl-000000 flex justify-center">
                      {h2}
                    </h2>
                  </div>
                  <div className="flex flex-row justify-center gap-5 m-m-0-28-27-20 font-semibold text-f-12 leading-l-h-32">
                    <ul className="list-inherit ">
                      <li>{li1}</li>
                      <li>{li2}</li>
                    </ul>
                    <ul className="list-inherit">
                      <li>{li3}</li>
                      <li>{li4}</li>
                    </ul>
                  </div>
                  <div className="m-mb-40">
                    <span className="flex flex-row justify-around m-m-0-30-40-30 border-solid border-boder-3 border-c-ffff">
                      <div className="flex flex-row items-center p-p-24">
                        <p className="text-tx-cl-F4B840 font-semibold text-f-36 leading-l-h-54">25%</p>
                        <p className="text-tx-cl-F4B840 font-semibold text-f-18 leading-l-h-27 ">off</p>
                      </div>
                      <p className="text-f-16 leading-l-h-24 font-normal text-tx-cl-000000 p-p-22-3-20-16">
                        Offer Applicable on All Our Pencils
                      </p>
                    </span>
                    <span className=" flex flex-row gap-4">
                      <div className="bg-background-default-color rounded-b-18 h-h-260 w-w-50%">
                        <div className="flex justify-center">
                          <img src={aeroPencil} alt="error" />
                        </div>
                        <h1 className=" text-tx-cl-000000 font-medium text-f-12 leading-l-h-18 flex items-center justify-center">
                          Aero Mechanical Pencil
                        </h1>
                        <span className="flex flex-row justify-center gap-2">
                          <p className=" text-tx-cl-000000 font-semibold text-f-14 leading-l-h-21">$99.00</p>
                          <p className="line-through font-normal text-f-12 leading-l-h-21">$125.00</p>
                        </span>
                      </div>
                      <div className="bg-background-default-color rounded-b-18 h-h-260 w-w-50%">
                        <div className="flex justify-center">
                          <img src={castellPencil} alt="error" />
                        </div>
                        <h1 className=" text-tx-cl-000000 font-medium text-f-12 leading-l-h-18 flex items-center justify-center">
                          Castell Mechanical Pencil
                        </h1>
                        <span className="flex flex-row justify-center gap-2">
                          <p className=" text-tx-cl-000000 font-semibold text-f-14 leading-l-h-21">$75.00</p>
                          <p className="line-through font-normal text-f-12 leading-l-h-21">$99.00</p>
                        </span>
                      </div>
                      <div
                        className={
                          isHiden
                            ? 'bg-background-default-color rounded-b-18 h-h-260 w-w-50% hidden'
                            : 'bg-background-default-color rounded-b-18 h-h-260 w-w-50%'
                        }
                        ref={pencilRef}
                      >
                        <div className="flex justify-center">
                          <img src={architectPencil} alt="error" />
                        </div>
                        <h1 className=" text-tx-cl-000000 font-medium text-f-12 leading-l-h-18 flex items-center justify-center">
                          Castell Mechanical Pencil
                        </h1>
                        <span className="flex flex-row justify-center gap-2">
                          <p className=" text-tx-cl-000000 font-semibold text-f-14 leading-l-h-21">$75.00</p>
                          <p className="line-through font-normal text-f-12 leading-l-h-21">$99.00</p>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => handleClick()}
                      className="bg-default-color-item hover:opacity-70 font-Poppins text-cl-FFFFFF rounded-border-radius-5 w-w-100 h-h-40 text-f-14 font-bold leading-l-h-40"
                    >
                      Shop all
                    </button>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
export default TabsComponent;
