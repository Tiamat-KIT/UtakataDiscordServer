import type { LoginData } from '@sapphire/plugin-api';

const DiscordOAuthURL = 'https://localhost:4000/api/oauth2/authorize'
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID
export const OAuthURL = new URL(DiscordOAuthURL)
OAuthURL.search = new URLSearchParams([
    ['client_id', DISCORD_CLIENT_ID as string],
    ['redirect_uri', 'http://localhost:4000/callback'],
    ['response_type', 'code'],
    ['scope', ['identify', 'guilds'].join(' ')],
]).toString()

export function handleClick() {
    window.location.replace(OAuthURL)
}

export async function exchangeCodeForAccessToken() {
    const codeSearchParams = new URLSearchParams(window.location.search)
    const response = await fetch('/oauth/callback', {
        method: 'POST',
        body: JSON.stringify({
            code: codeSearchParams
        })
    })    

    const data = (await response.json()) as Promise<LoginData>

    localStorage.setItem('token', JSON.stringify(data))
    window.location.replace('/')
}