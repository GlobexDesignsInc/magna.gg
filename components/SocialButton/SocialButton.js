// @flow

import React, {type Element, memo} from 'react';
import classnames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './SocialButton.css';

type PropsType = {
	className?: ?string,
	href: string,
	icon: string,
	title: string,
};

export const SocialButton = ({
	className,
	href,
	icon,
	title,
}: PropsType): Element<'a'> => (
	<a
		className={classnames(
			styles.main,
			styles[icon],
			className
		)}
		href={href}
		rel='noopener noreferrer'
		target='_blank'
		title={title}>
		<FontAwesomeIcon icon={['fab', icon]} size='lg' />
	</a>
);

SocialButton.displayName = 'SocialButton';

export default memo<PropsType>(SocialButton);
