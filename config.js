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
