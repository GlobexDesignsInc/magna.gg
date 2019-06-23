// @flow

/* eslint-disable jsx-a11y/anchor-is-valid, max-len */

import {type PlayerType, TEAMS} from '../../config';
import React, {type Element, memo} from 'react';
import InnerContent from '../InnerContent';
import Link from 'next/link';
import Logo from '../Logo';
import styles from './Footer.css';

type PropsType = {||};

type TeamType = 'ignis' | 'ventus' | 'terra';

export const Footer = (): Element<'div'> => (
	<div className={styles.main}>
		<InnerContent>
			<div className={styles.sections}>
				<div className={styles.section}>
					<h5 className={styles.sectionTitle}>Organization</h5>
					<Link href='/' prefetch={true}>
						<a className={styles.link}>Home</a>
					</Link>
					<Link href='/matches' prefetch={true}>
						<a className={styles.link}>Matches</a>
					</Link>
					<Link href='/teams' prefetch={true}>
						<a className={styles.link}>Teams</a>
					</Link>
					<Link href='/store' prefetch={true}>
						<a className={styles.link}>Store</a>
					</Link>
					<Link href='/contact' prefetch={true}>
						<a className={styles.link}>Contact</a>
					</Link>
				</div>
				{['ignis', 'terra', 'ventus'].map((team: TeamType): ?Element<'div'> => (
					(TEAMS[team].players || []).length ? (
						<div className={styles.section} key={team}>
							<h5 className={styles.sectionTitle}>
								{TEAMS[team].name}
							</h5>
							{TEAMS[team].players.map((player: PlayerType): Element<'a'> => (
								<a
									className={styles.link}
									href={player.twitch ? `https://twitch.tv/${player.twitch}` : '#'}
									key={player.name}
									rel='noopener noreferrer'
									target='_blank'>
									{player.name}
								</a>
							))}
						</div>
					) : null
				))}
				<div className={styles.section}>
					<h5 className={styles.sectionTitle}>Social</h5>
					<a
						className={styles.link}
						href='https://facebook.com/MagnaEsportsOW'
						rel='noopener noreferrer'
						target='_blank'>
						Facebook
					</a>
					<a
						className={styles.link}
						href='https://twitter.com/MagnaEsportsOW'
						rel='noopener noreferrer'
						target='_blank'>
						Twitter
					</a>
					<a
						className={styles.link}
						href='https://instagram.com/magnagaming'
						rel='noopener noreferrer'
						target='_blank'>
						Instagram
					</a>
					<a
						className={styles.link}
						href='https://youtube.com/channel/UCMCIC0HpGgTmyqLvrAlg4IA'
						rel='noopener noreferrer'
						target='_blank'>
						YouTube
					</a>
					<a
						className={styles.link}
						href='https://www.patreon.com/magnaesports'
						rel='noopener noreferrer'
						target='_blank'>
						Patreon
					</a>
					<a
						className={styles.link}
						href='https://discord.gg/MZvzKUa'
						rel='noopener noreferrer'
						target='_blank'>
						Discord
					</a>
				</div>
			</div>
			<Logo className={styles.logo} />
			<p className={styles.copy}>&copy; {new Date().getFullYear()} Magna eSports. All Rights Reserved. All product names, logos, and brands are property of their respective owners.</p>
			<p className={styles.copy}>Website by <a href='https://www.globexdesigns.com/' rel='noopener noreferrer' target='_blank'>Globex Designs, Inc.</a></p>
		</InnerContent>
	</div>
);

Footer.displayName = 'Footer';

export default memo<PropsType>(Footer);
