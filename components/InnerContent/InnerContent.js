// @flow

import React, {type Element, memo, type Node} from 'react';
import classnames from 'classnames';
import styles from './InnerContent.css';

type PropsType = {
	children?: Node,
	className?: ?string,
};

export const InnerContent = ({
	children,
	className,
}: PropsType): Element<'div'> => (
	<div className={classnames(styles.main, className)}>
		{children}
	</div>
);

InnerContent.displayName = 'InnerContent';

export default memo(InnerContent);
