// @flow

import React, {type Element, memo} from 'react';

type PropsType = {
	src: string,
};

export const Img = ({
	alt,
	className,
	src,
}: PropsType): Element<'img'> => {
	return (
		<img
			alt={alt}
			className={className}
			src={src} />
	);
};

Img.displayName = 'Img';

export default memo(Img);
