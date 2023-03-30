import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Partner.module.scss';
import Intro from '~/components/Intro';
import { Partners } from '~/array/arrayPartnert';

const cx = classNames.bind(styles);

function Partner() {
  const [partnerValue, setPartnerValue] = useState([]);

  const name = 'Basf Solutions';

  useEffect(() => {
    const fetchData = async () => {
      const result = await Partners.filter((data) => data.name === name);
      setPartnerValue(result);
    };

    fetchData();
  }, []);
  console.log(partnerValue);

  // Render history theo từng index được truyền vào
  const renderHistory = (history) => {
    const titleArr = history.title.split('/');
    const desArr = history.description.split('/');
    const tempList = titleArr.map((title, index) => (
      <div key={`item-${index}`}>
        <p>
          <b>{title}</b>
        </p>
        <p>{desArr[index]}</p>
      </div>
    ));

    return tempList;
  };
  return (
    <div className={cx('wrapper')}>
      <Intro home />
      <section className={cx('container')}>
        {partnerValue.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.content}</p>
            {item.history.map((history, index) => (
              <div key={index}>{renderHistory(history)}</div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Partner;
