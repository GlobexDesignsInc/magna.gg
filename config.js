// @flow strict

type TeamIdType = 'ignis' | 'terra' | 'ventus';

export type PlayerType = {|
	bio?: string,
	name: string,
	role: string,
	twitch?: string,
	twitter?: string,
|};

export type TeamType = {|
	name: string,
	players: Array<PlayerType>,
|};

// eslint-disable-next-line import/prefer-default-export
export const TEAMS: {[key: TeamIdType]: TeamType} = {
	ignis: {
		name: 'Magna Ignis',
		players: [],
	},
	terra: {
		name: 'Magna Terra',
		players: [{
			// eslint-disable-next-line max-len
			bio: `I've been playing Overwatch competitively since Open Division 2018 season one. I finished top 500 season 13/14 and peaked 4505. I'll be playing main support for Terra, and I currently flex for JMU's Tespa team, peaking top 10 in the preseason. Before Overwatch I played TF2 at its lowest competitive level. I'll be streaming as often as possible, but it's hard as a college student on 2 competitive teams.`,
			name: 'Ironcrit',
			role: 'Main Support',
			twitch: 'IronCritOW',
			twitter: 'IronCritOW',
		}, {
			// eslint-disable-next-line max-len
			bio: `What’s up gamers I'm Nico. I play Flex DPS for Terra as well as James Madison University's (JMU’s) Tespa team, ending at rank 10 in the preaseason. I began playing Overwatch on its first beta wave in November of 2015. Season 1 I peaked rank 80 (#89 in Top 500) and after that I have always been GM/peaked Top 500 except for a short period of 3 or 4 seasons where I took a break while transitioning into a college environment. Even after playing for so long I still have the competitive drive to improve and I really want to keep grinding and show my true potential. I sometimes stream on Twitch and am very active on Twitter so follow me pls :).`,
			name: 'Nico',
			role: 'Flex DPS',
			twitch: 'ow_nico',
			twitter: 'OW_Nico_',
		}, {
			name: 'Garmmz',
			role: 'Main Tank',
			twitch: 'garmmz',
		}, {
			name: 'Vrosado',
			role: 'Flex Support',
		}, {
			// eslint-disable-next-line max-len
			bio: `Hi, I’m Zeus. I’m 15 and play hitscan for Terra. I love being forced to play sombra. But I like winning so I'll play her. I excel on Widow, Genji, and Zarya and have reached a peak sr of 4295. I sometimes stream on Twitch.`,
			name: 'Zeus',
			role: 'Hitscan',
			twitch: 'zeus0w',
			twitter: 'ZeusXDx3',
		}, {
			// eslint-disable-next-line max-len
			bio: `Hi, im squid. Im 15 years old and I play flex support for Terra. My biggest passion is gaming and esports. I put all the work I can into the job i've been assigned and try to surpass expectations. My best heroes at the moment are Ana, Moira, and Mercy but i'm always excited to learn a new hero or meta. Overwatch is my first pc fps but as I've been playing since open beta, I plan on grinding as much as I can and possibly making it more than a hobby!`,
			name: 'squid',
			role: 'Flex Support',
			twitter: 'squid__ow',
		}, {
			name: 'Gohan',
			role: 'Off-tank',
		}, {
			name: 'Jay',
			role: 'Sub',
		}],
	},
	ventus: {
		name: 'Magna Ventus',
		players: [],
	},
};
