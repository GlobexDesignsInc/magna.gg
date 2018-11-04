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
			<h2>{teamData.name}</h2>
			<div className={styles.players}>
				{teamData.players.map((p: TeamType): Element<'div'> => {
					const id = p.name.toLowerCase();

					return (
						<div className={styles.player} key={id}>
							<img
								alt={p.name}
								className={styles.playerAvatar}
								src={`/static/avatars/discord-player-icon-${id}.png`} />
							<div className={styles.playerInfo}>
								<div className={styles.playerHeader}>
									<div className={styles.playerHeaderTitle}>
										<h3 className={styles.playerName}>{p.name}</h3>
										<div className={styles.playerRole}>{p.role}</div>
									</div>
									<div className={styles.playerHeaderSocial}>
										{p.twitch && (
											<SocialButton
												href={p.twitch}
												icon='twitch'
												title={`${p.name}'s Twitch`} />
										)}
									</div>
								</div>
								<p>{p.bio}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

Team.displayName = 'Team';

export default memo(Team);
