// @flow

import React, {type Element, memo} from 'react';
import Logo from '../Logo';
import Nav from '../Nav';
import SocialBar from '../SocialBar';
import styles from './Header.css';

export const Header = (): Element<'div'> => (
	<div className={styles.main}>
		<div className={styles.inner}>
			<Logo />
			<Nav className={styles.nav} />
			<SocialBar className={styles.socialBar} />
		</div>
	</div>
);

Header.displayName = 'Header';

export default memo(Header);
