'use server'

type DexScreenerPair = {
  chainId: string
  dexId: string
  url: string
  pairAddress: string
  baseToken: {
    address: string
    name: string
    symbol: string
  }
  quoteToken: {
    address: string
    name: string
    symbol: string
  }
  priceNative: string
  priceUsd: string
  txns: {
    h24: {
      buys: number
      sells: number
    }
    h6: {
      buys: number
      sells: number
    }
    h1: {
      buys: number
      sells: number
    }
  }
  volume: {
    h24: number
    h6: number
    h1: number
  }
  priceChange: {
    h24: number
    h6: number
    h1: number
  }
  liquidity: {
    usd: number
    base: number
    quote: number
  }
  fdv: number
  marketCap: number
}

export async function getTokenStats(tokenAddress: string = 'D3y8cyMykVbgQJRGnCAayNXkvRZy1C4qotqytFFupump') {
  try {
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`
    )
    const data = await response.json()
    if (data.pairs && data.pairs.length > 0) {
      return data.pairs[0] as DexScreenerPair
    } else {
      throw new Error('No pair data found')
    }
  } catch (error) {
    console.error('Error fetching token stats:', error)
    return null
  }
}

