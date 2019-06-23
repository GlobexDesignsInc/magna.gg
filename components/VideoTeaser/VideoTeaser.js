// @flow

/* eslint-disable jsx-a11y/media-has-caption */

import React, {type Element, memo, type Node} from 'react';
import InnerContent from '../InnerContent';
import styles from './VideoTeaser.css';

type PropsType = {|
	children?: Node,
	src: string,
|};

export const VideoTeaser = ({
	children,
	src,
}: PropsType): Element<'div'> => (
	<div className={styles.wrapper}>
		<video
			autoPlay={true}
			className={styles.video}
			controls={false}
			loop={true}
			muted={true}
			src={src} />
		{children && (
			<div className={styles.content}>
				<InnerContent className={styles.inner}>
					{children}
				</InnerContent>
			</div>
		)}
	</div>
);

VideoTeaser.displayName = 'VideoTeaser';

export default memo<PropsType>(VideoTeaser);
