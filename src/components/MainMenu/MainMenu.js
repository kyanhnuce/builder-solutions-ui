/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MainMenu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from '~/components/Popper/MenuItem';
import HeaderMenu from '../Popper/MenuItem/HeaderMenu';

const cx = classNames.bind(styles);

const profileMenu = [
  {
    title: 'Về chúng tôi',
    to: '/about-us',
  },
  {
    title: 'Đối tác',
    to: '/partner',
  },
  {
    title: 'Tuyển dụng',
    to: '/job-opportunities',
  },
];

const itemsMenu = [
  {
    title: 'Sản phẩm hãng Sika',
    children: {
      title: 'Sika Solutions',
      data: [
        {
          title: 'Phụ gia bê tông',
          to: '/',
        },
        {
          title: 'Vữa',
          to: '/',
        },
        {
          title: 'Sản phẩm chống thấm',
          to: '/',
        },
        {
          title: 'Trám khe/Chất kết dính',
          to: '/',
        },
      ],
    },
  },
  {
    title: 'Sản phẩm hãng MBS',
    children: {
      title: 'BASF SOLUTIONS',
      data: [
        {
          title: 'Phụ gia bê tông',
          to: '/',
        },
        {
          title: 'Vữa',
          to: '/',
        },
        {
          title: 'Sản phẩm chống thấm',
          to: '/',
        },
        {
          title: 'Trám khe/Chất kết dính',
          to: '/',
        },
      ],
    },
  },
  {
    title: 'Sản phẩm hãng MC-Bifi',
    children: {
      title: 'MC-BIFI SOLUTIONS',
      data: [
        {
          title: 'Phụ gia bê tông',
          to: '/',
        },
        {
          title: 'Vữa',
          to: '/',
        },
        {
          title: 'Sản phẩm chống thấm',
          to: '/',
        },
        {
          title: 'Trám khe/Chất kết dính',
          to: '/',
        },
      ],
    },
  },
];

const projectsMenu = [
  {
    title: 'Trong nước',
    to: '/local-propects',
  },
  {
    title: 'Quốc tế',
    to: '/international-projects',
  },
  {
    title: 'Khác',
    to: '/other-projects',
  },
];

const defaultFn = () => {};

function MainMenu({
  value,
  to,
  href,
  children,
  onClick,
  onChange = defaultFn,
  ...pastProps
}) {
  let Comp = 'button';

  const classes = cx('wrapper', 'main-menu');

  const [menuItem, setMenuItem] = useState([{ data: [] }]);
  const [showValueMenu, setShowValueMenu] = useState(true);

  // Phân cấp mảng

  // Lấy phần tử cuối cùng của mảng
  const current = menuItem[menuItem.length - 1];

  // Handle show Menu Item
  useEffect(() => {
    const menuId = value.id;
    if (menuId === 2) {
      setMenuItem([{ data: profileMenu }]);
    } else if (menuId === 3) {
      setMenuItem([{ data: itemsMenu }]);
    } else if (menuId === 4) {
      setMenuItem([{ data: projectsMenu }]);
    } else if (menuId === 1) {
      setShowValueMenu(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const props = {
    onClick,
    // Trường hợp đẩy thêm props ngoài
    ...pastProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  console.log(current);

  const renderItems = () => {
    return current.data.map((item, index) => {
      // Kiểm tra mảng chả có chứa phần tử con hay không
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setMenuItem((prev) => [...prev, item.children]);
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
    setMenuItem((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <Tippy
      // visible
      interactive
      placement="bottom-start"
      render={(attrs) =>
        showValueMenu ? (
          <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
              {menuItem.length > 1 && (
                <HeaderMenu title={current.title} onBack={handleBack} />
              )}
              <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
          </div>
        ) : null
      }
    >
      <Comp className={classes} {...props}>
        {children}
      </Comp>
    </Tippy>
  );
}

export default MainMenu;
