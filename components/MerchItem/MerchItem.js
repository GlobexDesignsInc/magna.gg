// @flow

import React, {type Element, memo} from 'react';
import styles from './MerchItem.css';

type PropsType = {|
	imageUrl: string,
	name: string,
	url: string,
|};

export const MerchItem = ({
	imageUrl,
	name,
	url,
}: PropsType): Element<'a'> => (
	<a
		className={styles.main}
		href={url}
		rel='noopener noreferrer'
		target='_blank'>
		<img
			alt={name}
			className={styles.img}
			src={imageUrl} />
		<span className={styles.name}>
			{name}
		</span>
	</a>
);

MerchItem.displayName = 'MerchItem';

export default memo<PropsType>(MerchItem);
