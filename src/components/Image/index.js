import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import img from '~/assets/img';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, failback: customFailback = img.noImage, ...props }, ref) => {
    const [failback, setFailback] = useState('');
    const handleError = () => {
        setFailback(customFailback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={failback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    failback: PropTypes.string,
};

export default Image;
