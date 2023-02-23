/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import styles from './MainMenu.module.scss';

const cx = classNames.bind(styles);

function MainMenu({
  to,
  href,
  mainMenu = false,
  mainSearch = false,
  children,
  items = [],
  onClick,
}) {
  let Comp = 'button';

  const classes = cx('wrapper', {
    mainMenu,
    mainSearch,
  });

  return <Comp className={classes}>{children}</Comp>;
}

export default MainMenu;
