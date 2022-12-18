import React from 'react';

const Dots = ({ slides, activeSlide, wrapperProps, ...dotProps }: any) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '25px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...wrapperProps}
    >
      {slides.map((slide: React.Key | null | undefined, i: any) => (
        <span
          key={slide}
          style={{
            padding: '10px',
            marginRight: '5px',
            cursor: 'pointer',
            borderRadius: '50%',
            background: `${activeSlide === i ? 'black' : 'white'}`,
          }}
          {...dotProps}
        />
      ))}
    </div>
  );
};

export default Dots;
