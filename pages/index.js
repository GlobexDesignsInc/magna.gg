// @flow

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

export const Home = (): Element<'div'> => (
	<PageTemplate>
		<Helmet>
			<title>Magna eSports: Semi-pro Overwatch organization</title>
		</Helmet>
		<VideoTeaser src='/static/videos/eskimo01.mp4'>
			<div className={styles.teaserCenter}>
				<h1 className={styles.h1}>
					Welcome to <strong className={styles.h1strong}>Magna eSports</strong>
				</h1>
				<p className={styles.slogan}>
					We&apos;re a Tier 2 Overwatch organization with two teams (Ignis & Ventus) competing in the Open Division, OTC, WarpMeta and other tournaments & leagues.
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
				<p className={styles.tripleBoxP}>We hold weekly social community events & games on our <a href='https://discord.gg/tm6tPD' rel='noopener noreferrer' target='_blank'>Discord server</a>. Come hang out with us and play some games!</p>
			</div>
		</InnerContent>
	</PageTemplate>
);

Home.displayName = 'Home';

export default Home;
