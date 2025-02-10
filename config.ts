import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { injected } from 'wagmi'

export const config = createConfig({
  connectors:[injected(),],
    chains: [mainnet],
	  transports: {
	    [mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/vy1Bi3eQL1WnjE1IK7-jznPRB9cXy5Xa"),
  },
})