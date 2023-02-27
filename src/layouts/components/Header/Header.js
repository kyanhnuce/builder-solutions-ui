/* eslint-disable jsx-a11y/heading-has-content */
import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MainMenu from '~/components/MainMenu';
import images from '~/assets/images';
import styles from './Header.module.scss';
import ItemSearch from '~/components/ItemSearch';

const cx = classNames.bind(styles);

const MAIN_MENU = [
  {
    id: 1,
    title: 'Trang chủ',
    to: '/',
  },
  {
    id: 2,
    title: 'Liên hệ',
    to: '/profile',
  },
  {
    id: 3,
    title: 'Sản phẩm',
    to: '/item',
  },
  {
    id: 4,
    title: 'Các dự án',
    to: '/projects',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const [currentSearch, setCurrentSearch] = useState(false);
  const [buttonSearch, setButtonSearch] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2, 3]);
  //   }, 0);
  // });

  const handleShowInput = () => {
    setCurrentSearch(!currentSearch);
    currentSearch === true ? setButtonSearch(true) : setButtonSearch(false);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Logo Company" />
        </div>
        {currentSearch ? (
          <Tippy
            visible={searchResult.length > 0}
            interactive
            placement="bottom-start"
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h3 className={cx('search-title')}>
                    Thông tin sản phẩm/giải pháp
                  </h3>
                  <ItemSearch />
                  <ItemSearch />
                  <ItemSearch />
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx('search-container')}>
              <div className={cx('search')}>
                <input
                  placeholder="Tìm kiếm sản phẩm, giải pháp,..."
                  spellCheck={false}
                />
                <button className={cx('clear')}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
              </div>
              <div className={cx('button')}>
                <button className={cx('find-btn')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button className={cx('close-btn')} onClick={handleShowInput}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
          </Tippy>
        ) : (
          <div className={cx('actions')}>
            {MAIN_MENU.map((item, index) => (
              <MainMenu key={index} value={item}>
                {item.title}
              </MainMenu>
            ))}
          </div>
        )}
        {buttonSearch ? (
          <button className={cx('search-btn')} onClick={handleShowInput}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
