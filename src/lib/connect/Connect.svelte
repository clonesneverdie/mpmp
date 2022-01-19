<script lang="ts">
  import { ethers } from 'ethers'
  import { onMount } from 'svelte'
  import { browser } from '$app/env'
  // import { connected, web3, selectedAccount, chainId, chainData } from 'svelte-web3'
  // import { defaultEvmStores } from 'svelte-web3'
  let ethereum: any | undefined
  onMount(() => {
    ethereum = (window as any).ethereum
    // defaultEvmStores.setProvider(window.ethereum)
  })

  async function connect() {
    if (ethereum === undefined) {
      alert('There is no Metamask. Please install Metamask.')
      return false
    }
    await addChain()
    requestAccount()
  }
  async function addChain() {
    // await ethereum.request({
    //   method: 'wallet_addEthereumChain',
    //   params: [
    //     {
    //       chainId: '0x4bd',
    //       chainName: 'Popcateum',
    //       nativeCurrency: {
    //         name: 'Popcat',
    //         symbol: 'POP',
    //         decimals: 18
    //       },
    //       rpcUrls: ['https://dataseed.popcateum.org'],
    //       blockExplorerUrls: ['https://explorer.popcateum.org']
    //     }
    //   ]
    // })
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x89',
          chainName: 'Polygon Mainnet',
          nativeCurrency: {
            name: 'Matic',
            symbol: 'MATIC',
            decimals: 18
          },
          rpcUrls: ['https://polygon-rpc.com/'],
          blockExplorerUrls: ['https://polygonscan.com/']
        }
      ]
    })
  }

  async function requestAccount() {
    await ethereum.request({ method: 'eth_requestAccounts' })
    // $isConnect = true
  }
</script>

<div on:click="{connect}">Wallet Connect</div>
