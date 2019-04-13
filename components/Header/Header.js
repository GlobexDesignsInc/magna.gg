// @flow

import React, {type Element, memo} from 'react';
import Logo from '../Logo';
import Nav from '../Nav';
import SocialBar from '../SocialBar';
import styles from './Header.css';

type PropsType = {};

export const Header = (): Element<'div'> => (
	<div className={styles.main}>
		<div className={styles.inner}>
			<Logo className={styles.logo} />
			<Nav className={styles.nav} />
			<SocialBar className={styles.socialBar} />
		</div>
	</div>
);

Header.displayName = 'Header';

export default memo<PropsType>(Header);
