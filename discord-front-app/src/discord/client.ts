import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';

const DiscordClient = new SapphireClient({
  intents: [GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  loadMessageCommandListeners: true
});

DiscordClient.login(process.env.DISCORD_TOKEN);

export { DiscordClient };