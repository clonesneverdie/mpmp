<script context="module" lang="ts">
  import { browser } from '$app/env'
  import { ethers } from 'ethers'
  import Web3Modal from 'web3modal'

  declare global {
    interface Window {
      WalletConnectProvider: any
    }
  }

  let WalletConnectProvider: any | undefined
  let provider

  if (browser === true) {
    console.log(browser)
    WalletConnectProvider = window.WalletConnectProvider.default
  }

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: '428bae8249eb440083ab07f9cb997126' // required
      }
    }
  }

  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions
  })

  export async function connect() {
    const instance = await web3Modal.connect()
    provider = new ethers.providers.Web3Provider(instance)
    const signer = provider.getSigner()
    return await signer.getAddress()
  }

  export async function disconnect() {
    // await provider.close();
    await web3Modal.clearCachedProvider()
    provider = null
  }
</script>
