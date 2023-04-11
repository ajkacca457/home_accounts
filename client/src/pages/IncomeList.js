import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import Loading from "../components/Loading";
import IncomeCard from '../components/IncomeCard';
import CardTags from '../components/CardTags';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';

const IncomeList = () => {
  const { isLoading, incomes, getIncomes, filterStatus, filterCategory, filterTitle, totalIncomes, numberOfIncomePages, incomepage } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, [filterStatus, filterCategory, filterTitle, incomepage]);

  if (isLoading) {
    return <Loading />;
  }

  if (incomes.length === 0) {
    return <div>
      <Filter isIncome={true} />
      <div className='bg-white my-8 p-4 text-center'>
        <h1>No transactions available..</h1>
      </div>
    </div>;
  }

  return (
    <div className='mt-10'>
      <Filter isIncome={true} />

      <CardTags info={{ cardClass: "bg-indigo-500", totalIncomes }} />
      {incomes && incomes.map((item) => {
        return (
          <IncomeCard key={item._id} {...item} />
        );
      })}

      {totalIncomes > 1 && <Pagination buttons={numberOfIncomePages} name="income" currentPage={incomepage} />}

    </div>
  );
};

export default IncomeList;