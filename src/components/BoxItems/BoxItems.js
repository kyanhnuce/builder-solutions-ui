import { Fragment } from 'react';

import classNames from 'classnames/bind';
import styles from './BoxItems.module.scss';
import Images from '~/components/Images';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function BoxItems({
  className,
  items = [],
  project = false,
  itemsLike = false,
  imgLarge = false,
  imgMedium = false,
  imgSmall = false,
  textLarge = false,
  textMedium = false,
  textSmall = false,
}) {
  const classes = cx('wrapper', { project, itemsLike, [className]: className });

  const renderItem = () => {
    return items.map((item) => (
      <Button
        to={
          item.name
            ? `/${item.solution}/${item.category}/${item.name}`
            : `/projects/${item.namepr}`
        }
        key={item.id}
        className={classes}
      >
        <div className={cx('images', { imgSmall, imgLarge, imgMedium })}>
          <Images className={cx('img')} src={item.images} alt={item.name} />
        </div>
        <div className={cx('content', { textSmall, textLarge, textMedium })}>
          <h3>{item.title}</h3>
          <p className={cx('description')}>{item.description}</p>
        </div>
      </Button>
    ));
  };
  return <Fragment>{renderItem()}</Fragment>;
}

export default BoxItems;
