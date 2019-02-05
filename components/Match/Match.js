// @flow

import React, {type Element, memo} from 'react';
import MatchPlace from '../MatchPlace';
import styles from './Match.css';

type PropsType = {
	className?: ?string,
	date: string,
	event: string,
	place?: 1 | 2 | 3,
	team: 'magna' | 'ignis' | 'ventus',
};

export const Match = ({
	className,
	date,
	event,
	place,
	team,
}: PropsType): Element<'div'> => (
	<div className={styles.main}>
		<img
			alt={team}
			className={styles.teamAvatar}
			src={`/static/team-${team}.png`} />
		<div className={styles.content}>
			<div className={styles.date}>{date}</div>
			<h4 className={styles.event}>{event}</h4>
		</div>
		{place && <MatchPlace place={place} />}
	</div>
);

Match.displayName = 'Match';

export default memo<PropsType>(Match);
