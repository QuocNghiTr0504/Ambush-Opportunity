import { useState } from 'react';

export const DropdownCard: React.FC<React.PropsWithChildren<{ header: React.ReactNode | string; text: string }>> = ({
  children,
  text,
  header,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      onClick={handleClick}
      className='w-full'
    >
      <div className='px-6 py-1 bg-violet-100 h-fit'>
        {' '}
        <div className=' items-center flex  justify-between '>
          <p className='font-bold text-xl my-6'>{header} </p>
          {open ? (
            <i className='fa-solid fa-caret-up text-xl text-orange-600 '></i>
          ) : (
            <i className='fa-solid fa-caret-down text-xl text-orange-600'></i>
          )}
        </div>
      </div>
      {open && <div className='text-lg p-5'>{text}</div>}
    </div>
  );
};
