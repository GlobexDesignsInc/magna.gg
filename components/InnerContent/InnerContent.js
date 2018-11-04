// @flow

import React, {type Element, memo, type Node} from 'react';
import classnames from 'classnames';
import styles from './InnerContent.css';

type PropsType = {
	children?: Node,
	className?: ?string,
	title?: ?string,
};

export const InnerContent = ({
	children,
	className,
	title,
}: PropsType): Element<'div'> => (
	<div className={classnames(styles.main, className)}>
		{title && (
			<h2>{title}</h2>
		)}
		{children}
	</div>
);

InnerContent.displayName = 'InnerContent';

export default memo(InnerContent);
