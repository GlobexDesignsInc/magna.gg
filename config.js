// @flow

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
		players: [{
			// eslint-disable-next-line max-len
			bio: `Hey, the name’s Pyro, I’m an Off tank player who prides herself on her Zarya play and over my almost two years of playing Overwatch have climbed from Silver to GM, and plan on continuing to work my way to the top. I’ve been playing with Magna since its first days, and working alongside my team to improve. Prior to Overwatch I played a mix of games such as CS:GO and Xcom EU/EW. Outside of gaming I’m a University student in computer science in Toronto, and an avid fan of sushi (and seafood in general).`,
			name: 'Pyro',
			role: 'Off-Tank',
			twitch: 'pyrothetank',
		}, {
			name: 'Ally',
			role: 'Flex DPS',
			twitter: 'ally__ow',
		}, {
			// eslint-disable-next-line max-len
			bio: `I'm Seyeumi and I am a Zenyatta and Ana specialist, but I play every support. I'm 21 years old and I've been playing in the T3 scene since early 2017. Prior to Overwatch I was grinding semi-pro League of Legends, and with a strong desire leftover to reach the top I ended up grinding Overwatch since beta. I have so much left in me to prove myself. I also probably survive off of caffeine and boba.`,
			name: 'Seyeumi',
			role: 'Flex Support',
			twitch: 'seyeumi',
			twitter: 'Seyeumi',
		}, {
			// eslint-disable-next-line max-len
			bio: `Ayy whaddup, my name's Paendo and I'm the Main-Tank for Magna Ignis. I'm a Junior in Highschool and I have a PROFOUND love for english muffins. Up until a couple years ago, I played video games casually, but once I saw myself improve within Overwatch and go from Silver to Diamond in competitive (Season 5), I felt that I could make something awesome out of this. Everyone in competitive also seems to take a more toxic approach to dealing with other players, which can be very frustrating, but I try to keep the peace between the players and focus on the game. I know that if I work hard and improve, I can become better and better. I feel like I've finally found a team that can support me as a player and help me do just that. Thank you to everyone who has supported me. PS: VIBRANT IS A BOT`,
			name: 'Paendo',
			role: 'Main Tank',
			twitch: 'paendotv',
			twitter: 'PaendoTV',
		}, {
			name: 'HWM Muffin',
			role: 'Main Support',
			twitch: 'HWM_Muffin',
		}],
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
			name: 'Jay',
			role: 'Off-Tank',
		}, {
			// eslint-disable-next-line max-len
			bio: `Hi, I’m Zeus. I’m 15 and play hitscan for Terra. I love being forced to play sombra. But I like winning so I'll play her. I excel on Widow, Genji, and Zarya and have reached a peak sr of 4295. I sometimes stream on Twitch.`,
			name: 'Zeus',
			role: 'Hitscan',
			twitch: 'zeus0w',
			twitter: 'ZeusXDx3',
		}],
	},
	ventus: {
		name: 'Magna Ventus',
		players: [],
	},
};
