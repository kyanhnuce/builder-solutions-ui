import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as itemServices from '~/apiServices/itemServices';
import classNames from 'classnames/bind';
import styles from './Solutions.module.scss';
import Intro from '~/components/Intro';
import BoxItems from '~/components/BoxItems/BoxItems';

const cx = classNames.bind(styles);

function Solutions() {
  const [categoryValue, setCategoryValue] = useState({});
  const [isDataFetched, setIsDataFetched] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
    const fetchData = async () => {
      const resultCategory = await itemServices.category(pathname);
      setCategoryValue(resultCategory);
      setIsDataFetched(true);
    };

    fetchData();
  }, [pathname]);

  console.log(categoryValue);

  // Render history theo từng index được truyền vào
  const renderHistory = () => {
    if (isDataFetched === true) {
      const titleHistory = categoryValue.titleContent.split('/');
      const desHistory = categoryValue.content.split('/');
      const render = titleHistory.map((title, index) => (
        <div key={`item-${index}`}>
          <p className={cx('title')}>{title}</p>
          <p className={cx('description')}>{desHistory[index]}</p>
        </div>
      ));

      return render;
    }
  };
  return (
    <div className={cx('wrapper')}>
      <Intro solution />
      <section className={cx('container')}>
        <div className={cx('content')}>
          <h1>{categoryValue.title}</h1>
          <span>{categoryValue.description}</span>
          {isDataFetched === true && renderHistory()}
          <h2>Khám phá các Giải pháp</h2>
          <div className={cx('items-content')}>
            <BoxItems
              items={categoryValue.data}
              className={cx('col-5', 'col-3', 'col-1')}
              imgSmall
              textSmall
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
