import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const Pagination = ({ buttons, name, currentPage }) => {

  const { pageChange } = useGlobalContext();
  const buttonList = Array.from({ length: buttons }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {
    let newPage = currentPage - 1;
    if (newPage < 1) {
      newPage = buttons;
    }
    pageChange(name, newPage);
  };

  const nextPage = () => {
    let newPage = currentPage + 1;
    if (currentPage >= buttons) {
      newPage = 1;
    }
    pageChange(name, newPage);
  };

  return (
    <div className='my-2 flex justify-center gap-x-[10px]'>
      <button onClick={prevPage}>prev</button>
      {buttonList.map((item, index) => {
        return <button key={index} className={currentPage === item ? `bg-red-300 py-2 px-3` : `bg-blue-300 py-2 px-3`} onClick={() => { pageChange(name, item); }} >{item}</button>;
      })}
      <button onClick={nextPage}>next</button>
    </div>
  );
};

export default Pagination;