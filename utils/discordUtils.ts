export function getIcon(guildId: string, iconHash: string): string {
  return `https://cdn.discordapp.com/icons/${guildId}/${iconHash}.png`;
}
