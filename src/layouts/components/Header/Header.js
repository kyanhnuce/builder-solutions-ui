import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import MainMenu from '~/components/MainMenu';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MAIN_MENU = [
  {
    title: 'Trang chủ',
    to: '/',
  },
  {
    title: 'Liên hệ',
    to: '/profile',
  },
  {
    title: 'Sản phẩm',
    to: '/item',
  },
  {
    title: 'Các dự án',
    to: '/projects',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  });

  const currentSearch = true;

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
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                Search Results
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
                <button className={cx('close-btn')}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
          </Tippy>
        ) : (
          <div className={cx('actions')}>
            <MainMenu mainMenu items={MAIN_MENU}>
              Trang chủ
            </MainMenu>
            <MainMenu mainMenu items={MAIN_MENU}>
              Liên hệ
            </MainMenu>
            <MainMenu mainMenu items={MAIN_MENU}>
              Sản phẩm
            </MainMenu>
            <MainMenu mainMenu items={MAIN_MENU}>
              Các dự án
            </MainMenu>
            <MainMenu mainSearch>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </MainMenu>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
