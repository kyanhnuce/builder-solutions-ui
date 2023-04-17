import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import Images from '~/components/Images/Images';
import images from '~/assets/images';
import {
  faEnvelope,
  faFax,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const arrayFooter = [
  {
    id: 1,
    title: 'Theo Dõi Chúng Tôi',
    contacts: [
      {
        title: 'Liên hệ/Tư vấn',
        href: '/',
      },
      {
        title: 'Cửa hàng gần nhất',
        href: '/',
      },
      {
        title: 'Feedback',
        href: '/',
      },
    ],
  },
  {
    id: 2,
    title: 'Kênh Khác',
    follows: [
      {
        img: images.sikaLogo,
        name: 'Sika',
        href: '/',
      },
      {
        img: images.mbsLogo,
        name: 'MBS',
        href: '/',
      },
      {
        img: images.facebookLogo,
        name: 'Facebook',
        href: '/',
      },
      {
        img: images.youtubeLogo,
        name: 'Youtube',
        href: '/',
      },
    ],
  },
  {
    id: 3,
    title: 'Thông Tin Liên Hệ',
    infos: [
      {
        name: 'Address/Địa chỉ',
        title:
          'Đường số 10, KCN Nhơn Trạch 1, Xã Phước Thiền, Huyện Nhơn Trạch, Đồng Nai',
        logo: '',
        icon: faLocationDot,
      },
      {
        name: 'Fax number',
        title: '(84.251) 3560 699',
        logo: '',
        icon: faFax,
      },
      {
        name: 'Tel number/Số điện thoại',
        title: '(84.251) 3560 700',
        logo: '',
        icon: faPhone,
      },
      {
        name: 'Email',
        title: 'kyanhnuce@gmail.com',
        logo: '',
        icon: faEnvelope,
      },
    ],
  },
  {
    id: 4,
    title: 'Builder-Solutions',
    imageOnly: images.logo,
  },
];

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {arrayFooter.map((data) => (
          <div key={data.id} className={cx('content')}>
            <h1>{data.title}</h1>
            <div className={cx('contact')}>
              {data.contacts &&
                data.contacts.map((contact, index) => (
                  <a key={index} href={contact.href}>
                    <p>{contact.title}</p>
                  </a>
                ))}
            </div>
            <div className={cx('follow')}>
              {data.follows &&
                data.follows.map((follow, index) => (
                  <Tippy key={index} content={follow.name} placement="bottom">
                    <a href={follow.href} className={cx('follow-link')}>
                      <Images
                        src={follow.img}
                        alt={follow.name}
                        className={cx('follow-logo')}
                      />
                    </a>
                  </Tippy>
                ))}
            </div>
            <div className={cx('info')}>
              {data.infos &&
                data.infos.map((info, index) => (
                  <p key={index}>
                    <FontAwesomeIcon
                      className={cx('info-icon')}
                      icon={info.icon}
                    />
                    {`${info.name}: ${info.title}`}
                  </p>
                ))}
            </div>
            <div className={cx('logo')}>
              {data.imageOnly && (
                <Images
                  src={data.imageOnly}
                  alt={data.title}
                  className={cx('logo-img')}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
