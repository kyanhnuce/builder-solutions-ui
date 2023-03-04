import { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Intro.module.scss';

import Images from '~/components/Images';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const IntroItem = [
  {
    pages: 'Home Page',
    img: images.home,
    alt: 'Home Image',
    fallbackImg: images.fbackImage,
    title: 'Chào mừng đến với Builder-Solutions',
    content: `GIẢI PHÁP DÀNH CHO NIỀM TIN`,
    content2: 'XÂY DỰNG DÀNH CHO TƯƠNG LAI',
    info: 'Nhà cung cấp vật liệu xây dựng từ móng tới mái cho công trình',
  },
  {
    pages: 'Profile Page',
    img: images.home,
    alt: 'Profile Image',
    fallbackImg: images.fbackImage,
    title: 'VỀ CHÚNG TÔI',
  },
];

function Intro({ home = false, profile = false, ...pastProps }) {
  const [introItem, setIntroItem] = useState([]);
  const props = { home, profile, ...pastProps };
  useEffect(() => {
    if (!!props.home) {
      setIntroItem(IntroItem.slice(0, 1));
    } else if (!!props.profile) {
      setIntroItem(IntroItem.slice(1, 2));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={cx('wrapper')}>
      {introItem.map((item, index) => (
        <Fragment key={index}>
          <div className={cx('intro-image')}>
            <Images
              className={cx('home-image')}
              src={item.img}
              alt={item.alt}
              fallback={item.fallbackImg}
            />
          </div>
          <div className={cx('content-container')}>
            <div className={cx('intro-content')}>
              <h2 className={cx('title-intro')}>{item.title}</h2>
              {item.content && (
                <Fragment>
                  <h1 className={cx('content-intro')}>
                    <span>{item.content}</span>
                    <br />
                    <span>{item.content2}</span>
                  </h1>
                  <p className={cx('info-intro')}>{item.info}</p>
                </Fragment>
              )}
            </div>
          </div>
        </Fragment>
      ))}
    </nav>
  );
}

export default Intro;
