<script lang="ts">
  import { myAddress, isConnect } from '$stores/chain'
  // import { onMount } from 'svelte'
  // import { ethers } from 'ethers'
  import { connect, disconnect } from '$lib/wallet/wallet.svelte'
  // onMount(async () => {
  //   connect()
  // })

  async function connectWallet() {
    $myAddress = await connect()
    console.log($myAddress)
    $isConnect = true
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
</script>

{#if $isConnect === true}
  <div on:click="{disconnect}">{$myAddress}</div>
{:else}
  <div on:click="{connectWallet}">Wallet Connect</div>
{/if}
