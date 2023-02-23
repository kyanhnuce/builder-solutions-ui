import classNames from 'classnames/bind';
import styles from './ItemSearch.module.scss';

const cx = classNames.bind(styles);

function ItemSearch() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('images')}
        src="https://cdn.sika.com/cdn/Channel/PIM/02-en_vn-Sikadur-732-1x1_hybrisProductImages.png"
        alt="Sikadur"
      />
      <div className={cx('info')}>
        <h4 className={cx('title')}>Sikadur</h4>
        <span className={cx('name')}>
          Sikadur®-732 là chất kết nối gốc nhựa epoxy chọn lọc, 2 thành phần,
          không dung môi.
        </span>
      </div>
    </div>
  );
}

export default ItemSearch;
