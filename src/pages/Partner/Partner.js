import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as itemServices from '~/apiServices/itemServices';
import classNames from 'classnames/bind';
import styles from './Partner.module.scss';
import Intro from '~/components/Intro';
import Images from '~/components/Images/Images';
import { Partners } from '~/array/arrayPartnert';

const cx = classNames.bind(styles);

function Partner() {
  const [partnerValue, setPartnerValue] = useState([]);
  const [categoryValue, setCategoryValue] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
    const fetchData = async () => {
      const result = await Partners.filter((data) => data.name === pathname);
      setPartnerValue(result);

      const resultCategory = await itemServices.category(pathname);
      setCategoryValue(resultCategory.info);
    };

    fetchData();
  }, [pathname]);

  console.log(categoryValue);

  // Render history theo từng index được truyền vào
  const renderHistory = (history) => {
    const titleHistory = history.title.split('/');
    const desHistory = history.description.split('/');
    const render = titleHistory.map((title, index) => (
      <div key={`item-${index}`}>
        <p className={cx('history-title')}>{title}</p>
        <p className={cx('history-description')}>{desHistory[index]}</p>
      </div>
    ));

    return render;
  };
  return (
    <div className={cx('wrapper')}>
      <Intro partner />
      <section className={cx('container')}>
        {partnerValue.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h2>Tổng qua về hãng</h2>
            <div className={cx('overview')}>
              <Images
                src={item.overviewImg}
                alt={item.name}
                className={cx('overview-img')}
              />
              <div className={cx('overview-content')}>
                <p className={cx('overview-description')}>{item.description}</p>
                <p>{item.content}</p>
              </div>
            </div>
            {/* History content */}
            <h2>Lịch sử hình thành</h2>
            <div className={cx('history')}>
              <Images src={item.historyImg} className={cx('history-img')} />
              {item.history.map((history, index) => (
                <div key={index} className={cx('history-content')}>
                  {renderHistory(history)}
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* Category content */}
        <h2>Khám phá các Giải pháp</h2>
        <div className={cx('category')}>
          {categoryValue.map((data, index) => (
            <div key={index} className={cx('category-content')}>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Partner;
