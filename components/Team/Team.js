// @flow strict

import {type PlayerType, TEAMS} from '../../config';
import React, {type Element, memo} from 'react';
import SocialButton from '../SocialButton';
import styles from './Team.css';

type PropsType = {|
	team: 'ignis' | 'terra' | 'ventus',
|};

export const Team = ({
	team,
}: PropsType): Element<'div'> => {
	const teamData = TEAMS[team];
	const players = (teamData.players || []);

	return (
		<div className={styles.main}>
			<h2>{teamData.name}</h2>
			<div className={styles.players}>
				{players.length === 0 && (
					<p>This team currently doesn&apos;t have an active roster.</p>
				)}

				{players.map((p: PlayerType): Element<'div'> => {
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
												href={`https://www.twitch.tv/${p.twitch}`}
												icon='twitch'
												title={`${p.name}'s Twitch`} />
										)}
										{p.twitter && (
											<SocialButton
												href={`https://www.twitter.com/${p.twitter}`}
												icon='twitter'
												title={`${p.name}'s Twitter`} />
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

export default memo <PropsType>(Team);
