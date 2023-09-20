import { useState } from 'react';
import { FC } from 'react';
import { NewComponent } from './NewComponent';
import './style.css';

type FilterNype = 'all' | 'ruble' | 'dollar';

export const App: FC<{ name: string }> = ({ name }) => {
  const [money, setMoney] = useState([
    { banknote: 'dollar', nominal: 100, number: 'a123456789' },
    { banknote: 'dollar', nominal: 50, number: 'b123456789' },
    { banknote: 'ruble', nominal: 100, number: 'c123456789' },
    { banknote: 'dollar', nominal: 100, number: 'd123456789' },
    { banknote: 'dollar', nominal: 50, number: 'e123456789' },
    { banknote: 'ruble', nominal: 100, number: 'f123456789' },
    { banknote: 'dollar', nominal: 50, number: 'j123456789' },
    { banknote: 'ruble', nominal: 50, number: 'h123456789' },
  ]);

  let currentMoney = money;

  const [filter, setFilter] = useState('all');
  // let currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble' );
  if (filter === 'ruble') {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === 'ruble'
    );
  }
  if (filter === 'dollar') {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === 'dollar'
    );
  }

  const onClickFilterHandler = (nameButton: string) => {
    setFilter(nameButton);
  };
  return (
    <NewComponent   currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}
    />
  );
};

// код до д.з
/* type FilterNype = 'all' | 'ruble' | 'dollar';

export const App: FC<{ name: string }> = ({ name }) => {
  const [money, setMoney] = useState([
    { banknote: 'dollar', nominal: 100, number: 'a123456789' },
    { banknote: 'dollar', nominal: 50, number: 'b123456789' },
    { banknote: 'ruble', nominal: 100, number: 'c123456789' },
    { banknote: 'dollar', nominal: 100, number: 'd123456789' },
    { banknote: 'dollar', nominal: 50, number: 'e123456789' },
    { banknote: 'ruble', nominal: 100, number: 'f123456789' },
    { banknote: 'dollar', nominal: 50, number: 'j123456789' },
    { banknote: 'ruble', nominal: 50, number: 'h123456789' },
  ]);

  let currentMoney = money;

  const [filter, setFilter] = useState('all');
  // let currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble' );
  if (filter === 'ruble') {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === 'ruble'
    );
  }
  if (filter === 'dollar') {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === 'dollar'
    );
  }

  const onClickFilterHandler = (nameButton: string) => {
    setFilter(nameButton);
  };
  return (
    <div>
      <ul>
        {currentMoney.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknote}</span>
              <span>{objFromMoneyArr.nominal}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          );
        })}
      </ul>
      <div style={{ marginLeft: '35px' }}>
        <button onClick={() => onClickFilterHandler('all')}>all</button>
        <button onClick={() => onClickFilterHandler('ruble')}>rubles</button>
        <button onClick={() => onClickFilterHandler('dollar')}>dollars</button>
      </div>
    </div>
  );  
}; */







