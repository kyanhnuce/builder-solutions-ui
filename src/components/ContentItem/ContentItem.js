import classNames from 'classnames/bind';
import styles from './ContentItem.module.scss';

const cx = classNames.bind(styles);

function ContentItem({ contents = [], natures = [] }) {
  return (
    <div className={cx('wrapper')}>
      {contents.split('/').map((content, index) => (
        <p key={index} className={cx('content')}>
          {content}
        </p>
      ))}
      <ul className={cx('nature')}>
        {natures.split('/').map((nature, index) => (
          <li key={index}>{nature}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContentItem;
