import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <nav className={cx('navbar')}>
                    <img src={images.logo} alt="House3D" className={cx('logo-h3d')} />
                    <div className={cx('item-between')}>
                        <button className={cx('button-all')}>
                            <Tippy
                                interactive
                                visible={searchResult.length > 0}
                                render={(attrs) => (
                                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <div>AXY</div>
                                            <div>AXY</div>
                                            <div>AXY</div>
                                            <div>AXY</div>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <span>Tất cả</span>
                            </Tippy>
                        </button>
                    </div>
                </nav>
                <div className={cx('list-nav')}>
                    <div className={cx('list-cate')}>
                        <div>ABC</div>
                        <div>ABC</div>
                        <div>ABC</div>
                    </div>
                    <div className={cx('other-list')}>
                        <div>XYZ</div>
                        <div>XYZ</div>
                        <div>XYZ</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
