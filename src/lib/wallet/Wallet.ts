// <script context="module" lang="ts">
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

declare global {
  interface Window {
    WalletConnectProvider: any
  }
}

if (browser) {
  console.log(browser)
  ethereum = (window as any).ethereum
  WalletConnectProvider = window.WalletConnectProvider.default
  providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          137: 'https://polygonscan.com/'
        },
        network: 'matic'
        // infuraId: infuraId
      }
    }
  }
  web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
    disableInjectedProvider: false
  })
}

export async function getAddress() {
  return await signer.getAddress()
}

export async function connect() {
  instance = await web3Modal.connect()
  provider = new ethers.providers.Web3Provider(instance)
  signer = provider.getSigner()
  return signer
}

export async function disconnect() {
  await web3Modal.clearCachedProvider()
  provider = null
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
// </script>
