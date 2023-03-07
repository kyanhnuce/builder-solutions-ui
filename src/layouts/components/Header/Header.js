/* eslint-disable jsx-a11y/heading-has-content */
import { Link } from 'react-router-dom';
import { Fragment, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBarsStaggered,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import MainMenu from '~/components/MainMenu';
import HeaderMenu from '~/components/Popper/MenuItem/HeaderMenu';
import Button from '~/components/Button/Button';
import Search from '../Search';
import images from '~/assets/images';
import styles from './Header.module.scss';
import { MainMenuArray, MainMenuArrayMoblie } from '~/array/arrayMainMenu';
import config from '~/config';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Header({ onChange = defaultFn }) {
  const [mainMenuMobile, setMainMenuMobile] = useState([{ data: [] }]);
  const [toggleSearch, setToggleSearch] = useState(true);
  const [toggleMenu, setToggleMenus] = useState(true);

  // Lấy phần tử cuối cùng của mảng
  const current = mainMenuMobile[mainMenuMobile.length - 1];

  // Handle show/toggle input
  const handleShowInput = () => {
    setToggleSearch(!toggleSearch);
  };

  // Handle show/toggle main menu layout in mobile
  const handleMainMeuLayout = () => {
    setToggleMenus(!toggleMenu);
  };

  // Render main menu sreen PC
  const renderMenu = () => {
    return MainMenuArray.map((item, index) => (
      <MainMenu mainMenuScreen key={index} value={item} />
    ));
  };

  // Render main menu sreen Mobile
  const fetchMainMenuMobile = useCallback(() => {
    setMainMenuMobile([{ data: MainMenuArrayMoblie }]);
  }, []);

  useEffect(() => {
    fetchMainMenuMobile();
  }, [fetchMainMenuMobile]);
  const renderMenuMobile = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MainMenu
          mainMenuMobile
          key={index}
          value={item}
          onClick={() => {
            if (isParent) {
              setMainMenuMobile((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  // Cắt đến phần tử ở cuối
  const handleBack = () => {
    setMainMenuMobile((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <img src={images.logo} alt="Logo Company" />
        </Link>
        {toggleSearch ? (
          <div className={cx('actions')}>{renderMenu()}</div>
        ) : (
          <Search onClick={handleShowInput} />
        )}
        {toggleSearch ? (
          <button className={cx('search-btn')} onClick={handleShowInput}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        ) : null}
        <div className={cx('inner-mobile')}>
          {toggleMenu ? (
            <button
              className={cx('show-menu-btn')}
              onClick={handleMainMeuLayout}
            >
              <FontAwesomeIcon icon={faBarsStaggered} />
            </button>
          ) : (
            <button
              className={cx('toggle-menu-btn')}
              onClick={handleMainMeuLayout}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          {!toggleMenu && (
            <div className={cx('actions-mobile')}>
              {mainMenuMobile.length > 1 && (
                <HeaderMenu title={current.title} onBack={handleBack} />
              )}
              {renderMenuMobile()}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
