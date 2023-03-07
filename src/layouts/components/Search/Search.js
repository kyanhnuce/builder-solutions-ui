import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ItemSearch from '~/components/ItemSearch';

const cx = classNames.bind(styles);

function Search({ onClick }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  // Xử lí xóa kết quả trong ô tìm kiếm
  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  // Xử lí ẩn kết quả
  const handleHideReult = () => {
    setShowResult(false);
  };

  return (
    <Tippy
      visible={showResult || searchResult.length > 0}
      interactive
      placement="bottom-start"
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h3 className={cx('search-title')}>Thông tin sản phẩm/giải pháp</h3>
            <ItemSearch />
            <ItemSearch />
            <ItemSearch />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideReult}
    >
      <div className={cx('search-container')}>
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Tìm kiếm sản phẩm, giải pháp,..."
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
        </div>
        <div className={cx('button')}>
          <button className={cx('find-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button className={cx('close-btn')} onClick={onClick}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </Tippy>
  );
}

export default Search;
