import { useAccount, useConnectors, useDisconnect, WagmiProvider } from 'wagmi'

import './App.css'
import { config } from "../config"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



const client = new QueryClient();

  function  wagmi () {
    return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <ConnectWallet/>
        </QueryClientProvider>
      </WagmiProvider>
    )
  }


  function ConnectWallet() {
    const {address}= useAccount();
    const {disconnect}= useDisconnect();





    if(address){
      return <div>
        You are connected {address} <button onClick={()=>{
          disconnect()
        }}></button>
      </div>
    }
    const connectors=useConnectors();
     return(
      <div>
        {connectors.map(c=><button>Connect Via{c.name}</button>)}
      </div>
     )

    
     
     
    





  }







  export default wagmi

