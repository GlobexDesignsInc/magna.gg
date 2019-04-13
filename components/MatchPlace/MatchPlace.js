// @flow

import React, {type Element, memo} from 'react';
import classnames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import indicator from 'ordinal/indicator';
import styles from './MatchPlace.css';

type PropsType = {|
	className?: ?string,
	place: number,
|};

export const MatchPlace = ({
	className,
	place,
}: PropsType): Element<'div'> => (
	<div className={styles.main}>
		<div>
			<FontAwesomeIcon
				className={classnames(styles.icon, styles[`award${place}`])}
				icon='award'
				size='3x' />
			<span className={styles.num}>
				{place}<sup className={styles.sup}>{indicator(place)}</sup>
			</span>
		</div>
		<div className={styles.place}>place finish</div>
	</div>
);

MatchPlace.displayName = 'MatchPlace';

export default memo<PropsType>(MatchPlace);
