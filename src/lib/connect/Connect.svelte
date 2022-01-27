<script lang="ts">
  import { onMount, afterUpdate, onDestroy } from 'svelte'
  import { myAddress, isConnect, signer, instance, chainId } from '$stores/chain'
  import {
    getInstance,
    connect,
    disconnect,
    connectState,
    accountsChanged,
    chainChanged,
    addChain,
    testTransaction,
    getAddress,
    getChainId
  } from '$lib/wallet/Wallet.svelte'
  import PaxABI from '$abi/Pax.json'

  onMount(async () => {
    let isConnected = await connectState()
    if (isConnected) {
      connectWallet()
    }
  })
  let data: string

  $: data = data

  async function testNetwork() {
    const ca = '0x818E6b4bEa1C1FfF712464FE057d4791Efc6D552'
    data = await testTransaction(ca, PaxABI, $signer, $myAddress)
    console.log(data)
  }

  async function connectWallet() {
    $instance = await getInstance()
    $signer = await connect($instance)
    $myAddress = await getAddress()
    await addChain()
    console.log($myAddress)
    const chainData = await getChainId()
    $chainId = chainData
    $isConnect = true
    console.log('isconnect', $isConnect)
    testNetwork()
    accountsChanged()
    chainChanged()
  }
</script>

{#if $isConnect === true}
  <div on:click="{disconnect}">{data}</div>
{:else}
  <div on:click="{connectWallet}">Wallet Connect</div>
{/if}
