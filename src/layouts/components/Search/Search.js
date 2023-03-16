import { useRef, useEffect, useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchServices from '~/apiServices/searchServices';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ItemSearch from '~/components/ItemSearch';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search({ onClick }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  // Xử lí gõ ô input delay 5s gửi trả về backend
  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    // Thoát hàm trong tình huống k có searchValue
    if (!debounceValue.trim()) {
      setSearchResult([]);

      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounceValue);

      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  // Xử lí xóa kết quả trong ô tìm kiếm
  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  // Xử lí ẩn kết quả
  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    // Using a wrapper <div> or <span> tag around the reference
    // element solves this by creating a new parentNode context.
    <div className={cx('wrapper')}>
      <Tippy
        visible={showResult && searchResult.length > 0}
        interactive
        placement="bottom-start"
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h3 className={cx('search-title')}>
                Thông tin sản phẩm/giải pháp
              </h3>
              {searchResult.map((result) => (
                <ItemSearch
                  key={result.id}
                  data={result}
                  onClick={() => {
                    setSearchValue('');
                    setSearchResult([]);
                  }}
                />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search-container')}>
          <div className={cx('search')}>
            <input
              ref={inputRef}
              value={searchValue}
              placeholder="Tìm kiếm sản phẩm, giải pháp,..."
              spellCheck={false}
              onChange={handleChange}
              onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !loading && (
              <button className={cx('clear')} onClick={handleClear}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            )}
            {loading && (
              <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            )}
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
    </div>
  );
}

export default Search;
