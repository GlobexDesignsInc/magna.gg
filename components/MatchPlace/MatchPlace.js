// @flow

import React, {memo} from 'react';
import classnames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './MatchPlace.css';

type PropsType = {
	className?: ?string,
	place: 1 | 2 | 3,
};

export const MatchPlace = ({
	className,
	place,
}: PropsType): Element<'div'> => {
	let suffix = 'st';
	if (place === 2) suffix = 'nd';
	if (place === 3) suffix = 'rd';

	return (
		<div className={styles.main}>
			<div>
				<FontAwesomeIcon
					className={classnames(styles.icon, styles[`award${place}`])}
					icon='award'
					size='3x' />
				<span className={styles.num}>
					{place}<sup className={styles.sup}>{suffix}</sup>
				</span>
			</div>
			<div className={styles.place}>place finish</div>
		</div>
	);
};

MatchPlace.displayName = 'MatchPlace';

export default memo(MatchPlace);
