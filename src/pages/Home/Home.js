import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import * as itemServices from '~/apiServices/itemServices';
import BoxItems from '~/components/BoxItems/BoxItems';
import Intro from '~/components/Intro';
import { projectsItem } from '~/array/arrayProjects';

const cx = classNames.bind(styles);

function Home() {
  const [titleList, setTitleList] = useState([]);
  const [itemsValue, setItemsValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultTitle = await itemServices.title();
      setTitleList(resultTitle);

      // Chờ cho tất cả các Promise trong mảng resultPromises trả về kết quả, sau đó lưu vào mảng result
      const resultPromises = resultTitle.map((title) =>
        itemServices.like(title),
      );
      const result = await Promise.all(resultPromises);
      setItemsValue(result);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx('wrapper')}>
      {/* Intro layout */}
      <Intro home />
      {/* Content */}
      <section className={cx('container')}>
        {/* Profile Layout */}
        <div className={cx('profile')}>
          <h1>VỀ CHÚNG TÔI</h1>
          <h2>Chào mừng đến với Builder-Solutions</h2>
          <p>
            Chào mừng đến với Builder-Solutions một&nbsp;
            <strong>
              thương hiệu toàn cầu về các giải pháp hóa chất tiên tiến cho ngành
              xây dựng.
            </strong>
            Thương hiệu Builder-Solutions được xây dựng trên nền tảng kinh
            nghiệm&nbsp;
            <strong>hơn một thế kỷ trong ngành xây dựng.&nbsp;</strong>
            <span>Xem thêm</span>
          </p>
        </div>
        {/* Project layout */}
        <div className={cx('projects')}>
          <h1>Thị Trường Tiêu Biểu</h1>
          <div className={cx('projects-content')}>
            <BoxItems items={projectsItem} project imgLarge textLarge />
          </div>
        </div>
        <div className={cx('items')}>
          <h1>Sản Phẩm Được Yêu Thích</h1>
          {titleList.map((item, index) => (
            <div key={index} className={cx('items-container')}>
              <h2>{item}</h2>
              {itemsValue[index] && (
                <div className={cx('items-content')}>
                  <BoxItems
                    items={itemsValue[index].data}
                    itemsLike
                    imgMedium
                    textMedium
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={cx('news')}>
          <h1>Tin tức</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
