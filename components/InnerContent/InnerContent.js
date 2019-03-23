// @flow

import React, {type Element, memo, type Node} from 'react';
import classnames from 'classnames';
import styles from './InnerContent.css';

type PropsType = {
	children?: Node,
	className?: ?string,
	title?: ?string,
	withPadding?: boolean,
};

export const InnerContent = ({
	children,
	className,
	title,
	withPadding,
}: PropsType): Element<'div'> => (
	<div className={classnames(
		styles.main,
		withPadding ? styles.withPadding : null,
		className
	)}>
		{title && (
			<h2>{title}</h2>
		)}
		{children}
	</div>
);

InnerContent.displayName = 'InnerContent';

export default memo<PropsType>(InnerContent);
