// Football writing on X (@HardyFootball). Add posts here and they appear on /football.

export const FOOTBALL_HANDLE = 'HardyFootball'
export const FOOTBALL_URL = `https://x.com/${FOOTBALL_HANDLE}`

export type FootballPost = {
    /** Short headline or the first line of the post */
    title: string
    /** e.g. "Mar 3, 2025" */
    date: string
    /** Link to the post or thread on X */
    href: string
    /** Optional one-line note on why it's worth reading */
    note?: string
}

export const FOOTBALL_POSTS: FootballPost[] = []
