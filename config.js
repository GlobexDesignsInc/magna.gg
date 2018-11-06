// @flow

type TeamIdType = 'ignis' | 'ventus';

export type PlayerType = {
	name: string,
	role: string,
	twitch?: string,
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
			name: 'Zeus',
			role: 'Projectile DPS',
			twitch: 'zeus0w',
		}, {
			bio: `Hey, the name’s Pyro, I’m an Off tank player who prides herself on her Zarya play and over my almost two years of playing overwatch have climbed from Silver to GM, and plan on continuing to work my way to the top. I’ve been playing with Magna since its first days, and working alongside my team to improve. Prior to Overwatch I played a mix of games such as CS : GO and Xcom EU/EW. Outside of gaming I’m a University student in computer science in Toronto, and an avid fan of sushi (and seafood in general).`,
			name: 'Pyro',
			role: 'Off-Tank',
			twitch: 'pyrothetank',
		}, {
			bio: `Hello, my name is Scorch and I have been playing Overwatch since launch in May 2016. I love the support role and being able to enable my team along with keeping them alive throughout the game. I have been with Magna since its founding in February of 2018. Being apart of this organization has been an amazing ride and experience. The goals everyone has all align of getting to the highest levels of play in Overwatch and becoming a top tier organization. I have been playing videogames since I was a kid and before Overwatch, I played other games such as Age of Empires III, Minecraft, Call of duty, Star Wars the Old Republic, and League of Legends. The games that I still play today are just Overwatch and Minecraft. Outside of videogames I am finishing my degree at Liberty University majoring in electrical engineer, and actively involved in serving and being apart of my local church.`,
			name: 'Scorch',
			role: 'Main Support',
			twitch: 'scorchmi',
		}, {
			name: 'Verious',
			role: 'Off-Support',
		}, {
			name: 'Berry',
			role: 'Main Tank',
			twitch: 'DanitraxTW',
		}, {
			bio: `Hey, I’m Sululu. I am the worst dps there is. I stream at twitch.tv/sululuxd so come and gib me your monies.`,
			name: 'Sululu',
			role: 'DPS',
			twitch: 'sululuxd',
		}],
	},
	ventus: {
		name: 'Magna Ventus',
		players: [{
			name: 'Bladez',
			role: 'DPS',
		}, {
			name: 'garmmz',
			role: 'Main Tank',
		}, {
			name: 'Eskimo',
			role: 'Support',
		}, {
			name: 'Hamurai',
			role: 'Support',
		}],
	},
};
