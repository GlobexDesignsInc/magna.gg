// @flow

import React, {memo} from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import styles from './Logo.css';

type PropsType = {
	className?: ?string,
};

export const Logo = ({
	className,
}: PropsType): Element<typeof Link> => (
	<Link href='/'>
		<a
			className={classnames(styles.main, className)}
			title='Magna eSports' />
	</Link>
);

Logo.displayName = 'Logo';

export default memo(Logo);
