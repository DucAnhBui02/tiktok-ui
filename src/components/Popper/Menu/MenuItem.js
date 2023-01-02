import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const menu_items = cx('menu-item', {
        sperate: data.sperate,
    });
    return (
        <Button className={menu_items} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
