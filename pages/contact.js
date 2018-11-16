// @flow

import React, {type Element} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Helmet} from 'react-helmet';
import Img from '../components/Img';
import InnerContent from '../components/InnerContent';
import PageTemplate from '../containers/PageTemplate';
import styles from './contact.css';

export const Contact = (): Element<'div'> => (
	<PageTemplate>
		<Helmet>
			<title>Contact | Magna eSports</title>
		</Helmet>
		<InnerContent title='Contact' withPadding={true}>
			<div className={styles.content}>
				<div className={styles.left}>
					<p className={styles.info}>The best way to get in touch with us is via one of our social media accounts:</p>
					<a
						className={styles.button}
						href='https://twitter.com/MagnaEsportsOW'
						rel='noopener noreferrer'
						target='_blank'>
						<FontAwesomeIcon
							className={styles.buttonIcon}
							icon={['fab', 'twitter']}
							size='lg' /> Twitter
					</a>
					<a
						className={styles.button}
						href='https://twitter.com/MagnaEsportsOW'
						rel='noopener noreferrer'
						target='_blank'>
						<FontAwesomeIcon
							className={styles.buttonIcon}
							icon={['fab', 'facebook']}
							size='lg' /> Facebook
					</a>
					<p className={styles.info2}>You can also come find us on Discord at:</p>
					<iframe
						className={styles.discordEmbed}
						frameBorder='0'
						height='500' src='https://discordapp.com/widget?id=415027820863946773&theme=dark&username=globex'
						title='Magna eSports Discord'
						width='350' />
				</div>
				<div className={styles.right}>
					<Img className={styles.img} src='/static/photos/01.jpeg' />
					<Img className={styles.img} src='/static/photos/02.jpeg' />
				</div>
			</div>
		</InnerContent>
	</PageTemplate>
);

Contact.displayName = 'Contact';

export default Contact;
