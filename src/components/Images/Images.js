import PropTypes from 'prop-types';

import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Images = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref,
  ) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
      setFallBack(customFallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallBack || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  },
);

Images.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Images;
