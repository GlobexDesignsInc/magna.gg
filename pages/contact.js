// @flow

import React, {type Element} from 'react';
import {Helmet} from 'react-helmet';
import InnerContent from '../components/InnerContent';
import PageTemplate from '../containers/PageTemplate';

export const Contact = (): Element<'div'> => (
	<PageTemplate>
		<Helmet>
			<title>Contact | Magna eSports</title>
		</Helmet>
		<InnerContent>
			Contact
		</InnerContent>
	</PageTemplate>
);

Contact.displayName = 'Contact';

export default Contact;
