import { useState } from 'react';
import Gallery from './Gallery/Gallery';
import TabsComponent from './Tabs/Tab';

const navigateData = [
  { id: 1, component: <TabsComponent /> },
  { id: 2, component: <Gallery /> },
];
function Slider() {
  let [idComponet, setIdComponet] = useState<number>(1);
  const handleComp = (id: number) => {
    setIdComponet(id);
  };
  return (
    <div className="relative">
      {navigateData.map(comp =>
        comp.id === idComponet ? (
          <>
            <div>{comp.component}</div>
            <span className="absolute flex justify-center w-maximun-width gap-4 m-mt-30">
              <button
                className={
                  idComponet === 1
                    ? 'w-w-15 h-h-15 bg-[#0a0a0a] opacity-50 rounded-radius'
                    : 'w-w-15 h-h-15 bg-[#7e7c7c] opacity-50 rounded-radius'
                }
                onClick={() => handleComp(1)}
              ></button>
              <button
                className={
                  idComponet === 2
                    ? 'w-w-15 h-h-15 bg-[#0a0a0a] opacity-50 rounded-radius'
                    : 'w-w-15 h-h-15 bg-[#7e7c7c] opacity-50 rounded-radius'
                }
                onClick={() => handleComp(2)}
              ></button>
            </span>
          </>
        ) : null,
      )}
    </div>
  );
}

export default Slider;
