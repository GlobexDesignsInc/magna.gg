// @flow

import React, {type Element, memo} from 'react';
import SocialButton from '../SocialButton';

type PropsType = {
	className?: ?string,
};

export const SocialBar = ({
	className,
}: PropsType): Element<'div'> => (
	<div className={className}>
		<SocialButton
			href='https://facebook.com/MagnaEsportsOW'
			icon='facebook'
			title='Magna eSports Facebook' />
		<SocialButton
			href='https://twitter.com/MagnaEsportsOW'
			icon='twitter'
			title='Magna eSports Twitch' />
		<SocialButton
			href='https://instagram.com/magnagaming'
			icon='instagram'
			title='Magna eSports Instagram' />
		<SocialButton
			href='https://youtube.com/channel/UCMCIC0HpGgTmyqLvrAlg4IA'
			icon='youtube'
			title='Magna eSports YouTube' />
		<SocialButton
			href='https://twitch.tv/MagnaOrg'
			icon='twitch'
			title='Magna eSports Twitch' />
	</div>
);

SocialBar.displayName = 'SocialBar';

export default memo<PropsType>(SocialBar);
