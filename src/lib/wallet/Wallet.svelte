<script context="module" lang="ts">
  import { browser } from '$app/env'
  import { ethers } from 'ethers'
  import Web3Modal from 'web3modal'

  let ethereum: any | undefined
  let WalletConnectProvider: any
  let provider: any
  let web3Modal: any
  let instance: any
  let providerOptions: any
  let signer: any

  if (browser) {
    ethereum = (window as any).ethereum
    WalletConnectProvider = window.WalletConnectProvider.default
    providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            137: 'https://polygon-rpc.com/'
          },
          network: 'matic'
        }
      }
    }
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
      disableInjectedProvider: false
    })
  }

  export async function getInstance() {
    instance = await web3Modal.connect()
    return instance
  }

  export async function connect(instance: any) {
    provider = new ethers.providers.Web3Provider(instance, 'any')
    signer = provider.getSigner()
    return signer
  }

  export async function disconnect() {
    await web3Modal.clearCachedProvider()
    window.location.reload()
  }

  export async function getAddress() {
    return await signer.getAddress()
  }

  export async function getChainId() {
    const chainData = await provider.getNetwork()
    return chainData.chainId
  }

  export function accountsChanged() {
    instance.on('accountsChanged', () => {
      window.location.reload()
    })
  }

  export function chainChanged() {
    instance.on('chainChanged', () => {
      window.location.reload()
    })
  }

  export async function connectState() {
    return web3Modal.cachedProvider
  }

  export async function testTransaction(ca, abi, signer, myadr) {
    const contract = new ethers.Contract(ca, abi, signer)
    const myPaxBalance = await contract.balanceOf(myadr)
    return ethers.utils.formatEther(myPaxBalance)
  }

  export async function addChain() {
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
  }
</script>

<script lang="ts">
</script>
