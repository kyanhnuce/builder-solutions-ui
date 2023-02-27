import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import MenuItem from './MenuItem';

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

const menuItem = [
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

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      visible
      interactive
      placement="bottom-start"
      render={(attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
          <PopperWrapper>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
