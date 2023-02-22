import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import styles from './Header.module.scss';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Logo Company" />
        </div>
        <div className={cx('actions')}>
          <button className={cx('home-btn')}>Trang chủ</button>
          <button className={cx('profile-btn')}>Liên hệ</button>
          <button className={cx('item-btn')}>Sản phẩm</button>
          <button className={cx('projects-btn')}>Các dự án</button>
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            {/* <div className={cx('search-container')}>
              <input placeholder="Tìm kiếm sản phẩm, giải pháp,..." />
              <button>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
              <button className={cx('find-btn-logo')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <button className={cx('close')}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div> */}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
