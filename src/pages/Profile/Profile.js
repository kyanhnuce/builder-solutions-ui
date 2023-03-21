import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Images from '~/components/Images';
import Intro from '~/components/Intro';
import { Partners } from '~/array/arrayPartnert';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Profile() {
  const { pathname, hash } = useLocation();

  // useEffect(() => {}, []);

  if (pathname === '/profile') {
    scroll.scrollTo(0, 0);
    console.log(pathname);
  }
  // else if (pathname === '/profile#introductions') {
  //   console.log(pathname);
  //   window.onload = () => {
  //     scroll.scrollTo('introductions', {
  //       duration: 2000,
  //       delay: 500,
  //       smooth: true,
  //     });
  //   };
  // }

  return (
    <div className={cx('wrapper')}>
      <Intro profile />
      <div className={cx('container')}>
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
          </p>
          <br />
          <p>
            Trải qua hơn 17 năm hoạt động, phát triển,&nbsp;
            <strong>Builder-Solutions</strong> đã trở thành đơn vị tiêu biểu, uy
            tín, thân thiện, phát triển bền vững với các đối tác trong lĩnh vực
            cung cấp và phân phối hóa chất xây dụng của các hãng nổi tiếng như:
            Tập đoàn Sika AG - Thụy Sĩ, Tập đoàn Basf &lt;nay là Master Builders
            Solutions&gt; - Đức ,Tập đoàn MC Bifi - Đức
          </p>
          <br />
          <p>
            Với cơ sở vật chất, trang thiết bị hiện đại và đội ngũ cán bộ công
            nhân viên chuyên nghiệp,<strong>Builder-Solutions</strong> đã cung
            ứng các sản phẩm hóa chất xây dựng cho các công trình bền vững, chất
            lượng cùng tiến độ.
          </p>
          <br />
          <p>
            Trong suốt thời gian qua, <strong>Builder-Solutions</strong> luôn là
            người bạn tin cậy của hầu hết các tập đoàn, các tổng công ty trong
            lĩnh vực xây dựng cầu đường ,xây dựng dân dụng và xây dựng các công
            trình thuỷ điện nhiệt điện có uy tín trên toàn quốc như: EVN, PCC1,
            VIET A, VINACONEX, SONG DA, LICOGI, COMA, HUD, Kabuta, Bê tông và
            xây dựng Minh Đức, Tư vấn và xây dựng Phú Xuân, Liên danh
            Tokyu-Taisei, Tập đoàn Amaccao, SCI Group ... Chúng tôi đã và luôn
            tự hào là đối tác, tin cậy và uy tín với các bạn hàng cùng phương
            châm <b>“Hợp tác bền vững và phát triển”.</b>
          </p>
          <br />
          <p>
            Chúng tôi luôn mong muốn trở thành đối tác tin cậy của Quý khách
            hàng.
          </p>
        </div>
        <div id="introductions" className={cx('partners')}>
          <h1>Các Đối Tác</h1>
          <div className={cx('partners-container')}>
            {Partners.map((partner) => (
              <div key={partner.id} className={cx('partners-content')}>
                <div className={cx('partners-logo')}>
                  <Images
                    src={partner.img}
                    alt={partner.name}
                    className={cx('partners-img')}
                  />
                </div>
                <div className={cx('partners-text')}>
                  <h2 className={cx('partners-title')}>{partner.name}</h2>
                  <p className={cx('partners-description')}>
                    {partner.description}
                  </p>
                  <p className={cx('partners-link')}>
                    Xem thêm{' '}
                    <FontAwesomeIcon
                      className={cx('partners-btn')}
                      icon={faAnglesRight}
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
