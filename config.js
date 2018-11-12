// @flow

type TeamIdType = 'ignis' | 'ventus';

export type PlayerType = {
	bio?: string,
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
			bio: `Hello, I'm Devin for the team Magna Ignis but you can just call me Verious. I'm a flex support who's main characters are Zenyatta and Ana. I pride myself on my mechanics and knowledge of the game since I started playing in late August 2016. I'm a new member to Ignis and plan to really get to know my team and truly become a part of it.`,
			name: 'Verious',
			role: 'Off-Support',
		}, {
			name: 'Berry',
			role: 'Main Tank',
			twitch: 'DanitraxTW',
		}, {
			bio: `Hey, I’m Sululu. I am the worst DPS there is. I stream at on Twitch so come and gib me your monies.`,
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
			bio: `Hey, I'm Eskimo, I am a peak 4250 Off Support. I started into to the eSports scene by playing Halo, Left4Dead, and Team Fotress 2. Outside of the scene I have a Bachelors of Fine Arts in Game and Simulation Design and work with other professionals to try and get eSports more accesessable to kids starting in middle school and finishing in college, As well as being the varsity and junior varisty coach of the Shawnee State Bear's Overwatch team. I'm making it to OWL level of play so let's get this bread!`,
			name: 'Eskimo',
			role: 'Support',
		}, {
			name: 'Hamurai',
			role: 'Support',
		}],
	},
};
