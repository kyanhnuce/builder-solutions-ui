import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';

import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  if (data.smooth) {
    const handleScroll = (el) => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }

  return (
    <Button
      className={cx('menu-item')}
      onClick={onClick}
      to={data.to}
      href={data.href}
      // scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      // smooth={data.smooth}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
