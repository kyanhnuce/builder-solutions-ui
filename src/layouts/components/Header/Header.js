/* eslint-disable jsx-a11y/heading-has-content */
import { useState, useEffect, useCallback } from 'react';
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
  const [currentSearch, setCurrentSearch] = useState(false);
  const [buttonSearch, setButtonSearch] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  });

  const handleShowInput = useCallback(() => {
    setCurrentSearch(!currentSearch);
    currentSearch === true ? setButtonSearch(true) : setButtonSearch(false);
  }, [currentSearch]);

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
