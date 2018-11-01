// @flow

import React, {memo} from 'react';
import {TEAMS, type TeamType} from '../../config';
import SocialButton from '../SocialButton';
import styles from './Team.css';

type PropsType = {
	team: 'ignis' | 'ventus',
};

export const Team = ({
	team,
}: PropsType): Element<'div'> => {
	const teamData = TEAMS[team];

	return (
		<div className={styles.main}>
			<h2 className={styles.teamName}>{teamData.name}</h2>
			<div className={styles.players}>
				{teamData.players.map((t: TeamType): Element<'div'> => (
					<div className={styles.player} key={t.name}>
						<div className={styles.playerAvatar} />
						<div className={styles.playerInfo}>
							<div className={styles.playerHeader}>
								<div className={styles.playerHeaderTitle}>
									<h3 className={styles.playerName}>{t.name}</h3>
									<div className={styles.playerRole}>{t.role}</div>
								</div>
								<div className={styles.playerHeaderSocial}>
									{t.twitch && (
										<SocialButton
											href={t.twitch}
											icon='twitch'
											title={`${t.name}'s Twitch`} />
									)}
								</div>
							</div>
							<p className={styles.playerBio}>{t.bio}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

Team.displayName = 'Team';

export default memo(Team);
