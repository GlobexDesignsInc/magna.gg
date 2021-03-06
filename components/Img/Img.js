// @flow strict

import React, {type Element, memo} from 'react';

type PropsType = {|
	alt?: ?string,
	className?: ?string,
	src: string,
|};

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

export default memo<PropsType>(Img);
