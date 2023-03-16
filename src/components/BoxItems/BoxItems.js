import { Fragment } from 'react';

import classNames from 'classnames/bind';
import styles from './BoxItems.module.scss';
import Images from '~/components/Images';

const cx = classNames.bind(styles);

function BoxItems({
  items = [],
  project = false,
  itemsLike = false,
  imgLarge = false,
  imgMedium = false,
  textLarge = false,
  textMedium = false,
}) {
  const classes = cx('wrapper', { project, itemsLike });
  const renderItem = () => {
    return items.map((item) => (
      <div key={item.id} className={classes}>
        <div className={cx('images', { imgLarge, imgMedium })}>
          <Images className={cx('img')} src={item.images} alt={item.name} />
        </div>
        <div className={cx('content', { textLarge, textMedium })}>
          <h2>{item.title}</h2>
          <p className={cx('description')}>{item.description}</p>
        </div>
      </div>
    ));
  };
  return <Fragment>{renderItem()}</Fragment>;
}

export default BoxItems;
