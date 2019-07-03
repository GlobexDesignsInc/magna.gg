// @flow strict

/* eslint-disable max-len */

import React, {type Element} from 'react';
import Button from '../components/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Helmet} from 'react-helmet';
import InnerContent from '../components/InnerContent';
import PageTemplate from '../containers/PageTemplate';
import Router from 'next/router';
import styles from './index.css';
import VideoTeaser from '../components/VideoTeaser';

const _handleMeetClick = function () {
	Router.push('/teams');
};

const getRandomVideo = function (): string {
	const items = [
		'/static/videos/eskimo02.mp4',
		'/static/videos/pyro01.webm',
	];

	return items[Math.floor(Math.random() * items.length)];
};

export const Home = (): Element<typeof PageTemplate> => (
	<PageTemplate>
		<Helmet>
			<title>Magna eSports: Semi-pro Overwatch organization</title>
		</Helmet>
		<VideoTeaser src={getRandomVideo()}>
			<div className={styles.teaserCenter}>
				<h1 className={styles.h1}>
					Welcome to <strong className={styles.h1strong}>Magna eSports</strong>
				</h1>
				<p className={styles.slogan}>
					We&apos;re a Tier 3 Overwatch organization with multiple teams (Ignis, Terra & Ventus) competing in the Open Division, OTC, WarpMeta and other tournaments & leagues.
				</p>
				<Button
					className={styles.sloganButton}
					onClick={_handleMeetClick}>
					Meet Our Teams
				</Button>
			</div>
		</VideoTeaser>
		<InnerContent className={styles.tripleBoxWrapper}>
			<div className={styles.tripleBox}>
				<FontAwesomeIcon
					className={styles.competitiveIcon}
					icon='trophy'
					size='3x' />
				<h3>Competitive</h3>
				<p className={styles.tripleBoxP}>We&apos;re a highly competitive crew and our goal is to become a professional organization competing at the highest levels of the game.</p>
			</div>
			<div className={styles.tripleBox}>
				<FontAwesomeIcon
					className={styles.collaborativeIcon}
					icon='user-friends'
					size='3x' />
				<h3>Composed</h3>
				<p className={styles.tripleBoxP}>We have no room for toxicity or attitudes. All our players, coaches and staff embrace the strongest forms of PMA at all times.</p>
			</div>
			<div className={styles.tripleBox}>
				<FontAwesomeIcon
					className={styles.socialIcon}
					icon='comments'
					size='3x' />
				<h3>Social</h3>
				<p className={styles.tripleBoxP}>We hold weekly social community events & games on our <a href='https://discord.gg/MZvzKUa' rel='noopener noreferrer' target='_blank'>Discord server</a>. Come hang out with us and play some games!</p>
			</div>
		</InnerContent>
	</PageTemplate>
);

Home.displayName = 'Home';

export default Home;
