<script lang="ts">
  import { onMount } from 'svelte'
  // import { connected, provider, chainId, chainData, signer, signerAddress } from 'svelte-ethers-store'
  // import { defaultEvmStores } from 'svelte-ethers-store'
  // import WalletConnectProvider from '@walletconnect/web3-provider'
  import Web3Modal from 'web3modal'
  import { ethers } from 'ethers'
  import { browser } from '$app/env'

  let ethereum: any | undefined
  if (browser) {
    ethereum = (window as any).ethereum
  }
  onMount(() => {
    // defaultEvmStores.setProvider()
  })

  async function connect() {
    // if (ethereum === undefined) {
    //   alert('There is no Metamask. Please install Metamask.')
    //   return false
    // }
    const web3Modal = new Web3Modal()
    const instance = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(instance)
    const signer = provider.getSigner()
    let myAddress = await signer.getAddress()
    console.log(myAddress)
    // defaultEvmStores.setProvider(provider)
    // await addChain()
    // requestAccount()
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
