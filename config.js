// @flow

type TeamIdType = 'ignis' | 'terra' | 'ventus';

export type PlayerType = {
	bio?: string,
	name: string,
	role: string,
	twitch?: string,
	twitter?: string,
};

export type TeamType = {
	name: string,
	players: Array<PlayerType>,
};

// eslint-disable-next-line import/prefer-default-export
export const TEAMS: {[key: TeamIdType]: TeamType} = {
	ignis: {
		name: 'Magna Ignis',
		players: [{
			bio: `Hi, I’m Zeus. I’m 15 and play hitscan for ignis. I love being forced to play sombra. But I like winning so I'll play her. I excel on Widow, Genji, and Zarya and have reached a peak sr of 4295. I sometimes stream on Twitch.`,
			name: 'Zeus',
			role: 'Projectile DPS',
			twitch: 'zeus0w',
		}, {
			bio: `Hey, the name’s Pyro, I’m an Off tank player who prides herself on her Zarya play and over my almost two years of playing Overwatch have climbed from Silver to GM, and plan on continuing to work my way to the top. I’ve been playing with Magna since its first days, and working alongside my team to improve. Prior to Overwatch I played a mix of games such as CS:GO and Xcom EU/EW. Outside of gaming I’m a University student in computer science in Toronto, and an avid fan of sushi (and seafood in general).`,
			name: 'Pyro',
			role: 'Off-Tank',
			twitch: 'pyrothetank',
		}, {
			name: 'gnja2012',
			role: 'Main Tank',
		}, {
			name: 'Pastel',
			role: 'Main Support',
		}, {
			name: 'Rion',
			role: 'Flex Support',
		}],
	},
	terra: {
		name: 'Magna Terra',
		players: [{
			bio: `Hello, My name is EgleaFlame and I am 18 years old and i play Main Tank for Magna Terra. I am a previous console but have recently fully moved to PC during S13, my console peak has been 4703 and I have been rank 1 there for about 4 seasons in a row while solo queing to rank 1 on a smurf and stacking on another account to rank 1. I used to play on a console team for about a year and a half as their IGL and target caller. I have only won one tourney on console, but i strive to win as many tourneys on pc. My goal is to grind OW to reach OWL and be one of the, if not the best Main Tank, i also want to represent my fellow console players and inspire some of them to strive for greatness! Fun fact I am also married to @MrsEgleaFlame on twitter!`,
			name: 'Eglea',
			role: 'Main Tank',
			twitch: 'mico_ot',
			twitter: 'EgleaFlame',
		}, {
			name: 'Redbird',
			role: 'Flex Tank',
			twitch: 'flyingredbird',
			twitter: 'Redbird_OW',
		}, {
			name: 'MAVY',
			role: 'Hitscan DPS',
		}, {
			name: 'Inukshuk',
			role: 'Flex DPS',
			twitch: 'mudory',
			twitter: 'mudoryow',
		}, {
			bio: `I've been playing Overwatch competitively since Open Division 2018 season one. I've scratched top 500 multiple times but I haven't sat in it properly. I'll be playing main support for Terra, and I currently flex for JMU's Tespa team, peaking top 10 in the preseason. Before Overwatch I played TF2 at its lowest competitive level. I'll be streaming as often as possible, but it's hard as a college student on 2 competitive teams.`,
			name: 'Ironcrit',
			role: 'Main Support',
			twitch: 'ironcritow',
		}],
	},
	ventus: {
		name: 'Magna Ventus',
		players: [{
			name: 'Bladez',
			role: 'DPS',
			twitch: 'exiledbladez',
		}, {
			name: 'garmmz',
			role: 'Main Tank',
			twitch: 'garmmz',
		}, {
			bio: `Hey, I'm Eski, I am a peak 4250 Off Support. I started into to the eSports scene by playing Halo, Left4Dead, and Team Fotress 2. Outside of the scene I have a Bachelors of Fine Arts in Game and Simulation Design and work with other professionals to try and get eSports more accesessable to kids starting in middle school and finishing in college, As well as being the varsity and junior varisty coach of the Shawnee State Bear's Overwatch team. I'm making it to OWL level of play so let's get this bread!`,
			name: 'Eski',
			role: 'Support',
		}, {
			name: 'Hamurai',
			role: 'Support',
		}, {
			name: 'Adduuuh',
			role: 'Support',
		}, {
			name: 'Chaxus',
			role: 'Off-Tank',
		}, {
			bio: `Hey, I'm Jackal, I am a peak 4285 flex player. My strongest specializations are histcan/hanzo/zarya, but can play most of the Overwatch heroes at a proficient level. Some may refer to me as even a flex god. I started my eSports career in CS 1.6 via CEVO and CAL leagues which then continued into CS:S. From there I transitioned into the TWL for CoD4. After that i found myself sucked into the MOBA life with League of Legends until Overwatch came out with an occasional visit back to my FPS roots with releases of new CoD and Battlefield titles. I have played on many teams in many amateur tournaments and have hundreds of hours in scrim experience. I also stream quite frequently on twitch.`,
			name: 'Jackal',
			role: 'DPS',
			twitch: 'EbilJackal',
		}],
	},
};
