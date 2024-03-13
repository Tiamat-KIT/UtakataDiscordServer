import './lib/setup';
import '@sapphire/plugin-api/register'

import { LogLevel, SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits, OAuth2Scopes } from 'discord.js';


const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;

if(!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !DISCORD_CLIENT_SECRET) {
	console.error('Missing environment variables');
	process.exit(1);

}

const client = new SapphireClient({
	defaultPrefix: '!',
	caseInsensitiveCommands: true,
	logger: {
		level: LogLevel.Debug
	},
	intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent],
	loadMessageCommandListeners: true,
	api: {
		auth: {
			// The application/client ID of your bot
			// You can find this at https://discord.com/developers/applications
			id: DISCORD_CLIENT_ID,
			// The client secret of your bot
			// You can find this at https://discord.com/developers/applications
			secret: DISCORD_CLIENT_SECRET,
			// The name of the authentication cookie
			cookie: 'SAPPHIRE_AUTH',
			// The URL that users should be redirected to after a successful authentication
			redirect: '',
			// The scopes that should be given to the authentication
			scopes: [OAuth2Scopes.Identify,OAuth2Scopes.Guilds],
			// Transformers to transform the raw data from Discord to a different structure.
			transformers: [],
			domainOverwrite: '127.0.0.1',
		  },
		  // The prefix for all routes, e.g. / or v1/
		  prefix: '',
		  // The origin header to be set on every request at 'Access-Control-Allow-Origin.
		  origin: '*',
		  // Any options passed to the NodeJS "net" internal server.listen function
		  // See https://nodejs.org/api/net.html#net_server_listen_options_callback
		  listenOptions: {
			port: 4000,
			host: 'localhost',
			exclusive: true
		  },
	}
});

const main = async () => {
	try {
		client.logger.info('Logging in');
		await client.login(DISCORD_TOKEN);
		client.logger.info('logged in');
	} catch (error) {
		client.logger.fatal(error);
		await client.destroy();
		process.exit(1);
	}
};

void main();
