import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu/';
import config from '~/config';
import { HomeIcon, FollowIcon, LiveIcon, HomeActiveIcon, FollowActiveIcon, LiveActiveIcon } from '~/components/Icons';
import SuggestedAcounts from '~/components/SuggestedAcounts';
import * as userService from '~/services/userService';
const cx = classNames.bind(styles);

const PER_PAGE = 5;
function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggeted({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((prev) => [...prev, ...data]);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowIcon />}
                    activeIcon={<FollowActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAcounts label="Suggested Account" data={suggestedUser} />
            <SuggestedAcounts label="Following Account" />
        </aside>
    );
}

export default Sidebar;
