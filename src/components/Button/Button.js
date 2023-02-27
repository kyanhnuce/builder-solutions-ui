import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, children, className, onClick, ...pastProps }) {
  let Comp = 'button';

  const classes = cx('wrapper', {
    [className]: className,
  });

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

  return (
    <Comp className={classes} {...props}>
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
