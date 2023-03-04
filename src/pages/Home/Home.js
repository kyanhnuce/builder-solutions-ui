import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Images from '~/components/Images';
import images from '~/assets/images';
import Intro from '~/components/Intro';

const cx = classNames.bind(styles);

const Projects_item = [
  {
    img: images.local,
    alt: 'Trong nước',
    title: 'Trong Nước',
    content:
      'Những công trình được sử dụng sản phẩm bởi các hãng do Builder-Solutions cung cấp vận hành trong nước',
  },
  {
    img: images.international,
    alt: 'Quốc tế',
    title: 'Quốc Tế',
    content:
      'Những công trình được sử dụng sản phẩm bởi các hãng do Builder-Solutions cung cấp vận hành tại thị trường quốc tế',
  },
  {
    img: images.other,
    alt: 'Khác',
    title: 'Dự Án Đặc Biệt',
    content:
      'Ngoài ra, có những dự án đặc biệt sử dụng các sản phẩm chuyên dụng như trụ điện gió, sân bay, công nghệ điện tử,...',
  },
  {
    img: images.other,
    alt: 'Contact',
    title: 'Kênh phân phối',
    content:
      'Hệ thống cửa hàng trong nước và quốc tế cùng với thông tin nhà máy của các hãng đối tác được sản xuất trong nước.',
  },
];

function Home() {
  const renderProjects = () => {
    return Projects_item.map((item, index) => (
      <Fragment key={index}>
        <div className={cx('projects-item_content')}>
          <div className={cx('images')}>
            <Images className={cx('img')} src={item.img} alt={item.alt} />
          </div>
          <div className={cx('projects-text')}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        </div>
      </Fragment>
    ));
  };

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
          <div className={cx('projects-item')}>{renderProjects()}</div>
        </div>
        <div className={cx('items')}>
          <h1>Sản Phẩm Được Yêu Thích</h1>
        </div>
        <div className={cx('news')}>
          <h1>Tin tức</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
