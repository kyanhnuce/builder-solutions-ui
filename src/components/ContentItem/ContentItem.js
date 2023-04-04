import classNames from 'classnames/bind';
import styles from './ContentItem.module.scss';

const cx = classNames.bind(styles);

function ContentItem({
  contents = [],
  natures = [],
  highlight = false,
  normal = false,
}) {
  return (
    <div className={cx('wrapper')}>
      {contents.length === 0
        ? null
        : contents.split('/').map((content, index) => (
            <p key={index} className={cx('content')}>
              {content}
            </p>
          ))}
      <ul className={cx('nature')}>
        {natures.length === 0
          ? null
          : natures.split('/').map((nature, index) => (
              <li key={index} className={cx({ highlight, normal })}>
                {nature}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default ContentItem;
