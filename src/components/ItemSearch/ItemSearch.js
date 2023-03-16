import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ItemSearch.module.scss';

import Images from '../Images';

const cx = classNames.bind(styles);

function ItemSearch({ data, onClick }) {
  return (
    <Link to={`/${data.name}`} className={cx('wrapper')} onClick={onClick}>
      <Images className={cx('images')} src={data.images} alt={data.name} />
      <div className={cx('info')}>
        <h4 className={cx('title')}>{data.title}</h4>
        <span className={cx('description')}>{data.description}</span>
      </div>
    </Link>
  );
}

export default ItemSearch;
