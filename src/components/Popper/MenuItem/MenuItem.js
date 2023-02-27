import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';

import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button className={cx('menu-item')} onClick={onClick} to={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
