import { useState, useEffect } from 'react';
import Intro from '~/components/Intro';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Items.module.scss';

import * as itemServices from '~/apiServices/itemServices';
import Images from '~/components/Images';
import ContentItem from '~/components/ContentItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const tabs = ['Tổng quan', 'Tài liệu cá nhân'];
const tabsPane = ['Ứng dụng', 'Ưu điểm', 'Quy cách đóng gói', 'Màu sắc'];

function Items() {
  const [itemsValue, setItemsValue] = useState([]);
  const [applicationContent, setApplicationContent] = useState([]);
  const [applicationNature, setApplicationNature] = useState([]);
  const [characteristicContent, setCharacteristicContent] = useState([]);
  const [characteristicNature, setCharacteristicNature] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [type, setType] = useState('Tổng quan');
  const [packingItem, setPackingItem] = useState('');
  const [colorItem, setColorItem] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
    const fetchData = async () => {
      const result = await itemServices.items(pathname);
      setItemsValue(result);
      setApplicationContent(
        result.map((item) => item.applicationContent || null),
      );
      setApplicationNature(
        result.map((item) => item.applicationNature ?? item.applicationNature),
      );
      setCharacteristicContent(
        result.map(
          (item) => item.characteristicContent ?? item.characteristicContent,
        ),
      );
      setCharacteristicNature(
        result.map(
          (item) => item.characteristicNature ?? item.applicationContent,
        ),
      );
      result.map((item) => {
        setPackingItem(item.packing);
        setColorItem(item.color);
      });
      setIsDataFetched(true);
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className={cx('wrapper')}>
      <Intro items />
      <section className={cx('container')}>
        {/* Content */}
        {itemsValue.map((item) => (
          <div key={item.id} className={cx('content')}>
            <Images
              src={item.images}
              atl={item.name}
              className={cx('content-img')}
            />
            <div className={cx('content-general')}>
              <h1>{item.title}</h1>
              <h3>{item.description}</h3>
              <ContentItem
                contents={item.content}
                natures={item.nature}
                highlight
              />
            </div>
          </div>
        ))}
        {/* Tabs */}
        <div className={cx('tabs')}>
          {tabs.map((tab) => (
            <Button
              key={tab}
              className={
                type === tab ? cx('tabs-items', 'active') : cx('tabs-items')
              }
              onClick={() => setType(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
        {/* Tabs Content */}
        {type === 'Tổng quan' ? (
          <div className={cx('tabs-content')}>
            {tabsPane.map((pane, index) => (
              <div key={index} className={cx('tabs-text')}>
                <h3>{pane}</h3>
                {isDataFetched === true && pane === 'Ứng dụng' && (
                  <ContentItem
                    contents={applicationContent[0]}
                    natures={applicationNature[0]}
                    normal
                  />
                )}
                {isDataFetched === true && pane === 'Ưu điểm' && (
                  <ContentItem
                    contents={characteristicContent[0]}
                    natures={characteristicNature[0]}
                    normal
                  />
                )}
                {isDataFetched === true && pane === 'Quy cách đóng gói' && (
                  <p>{packingItem}</p>
                )}
                {isDataFetched === true && pane === 'Màu sắc' && (
                  <p>{colorItem}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>Truyền file</p>
        )}
      </section>
    </div>
  );
}

export default Items;
