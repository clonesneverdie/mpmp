<script lang="ts">
  import { onMount } from 'svelte'
  import { userInfoMenu } from '$stores/index'
  import { myAddress, isConnect, signer, instance, chainId, myShortAddress } from '$stores/chain'
  import {
    getInstance,
    connect,
    connectState,
    accountsChanged,
    chainChanged,
    addChain,
    testTransaction,
    getAddress,
    getChainId,
    getShortAddress
  } from '$lib/chain/Wallet.svelte'
  import PaxABI from '$abi/Pax.json'

  onMount(async () => {
    let isConnected = await connectState()
    if (isConnected) {
      connectWallet()
    }
  })

  let thisWidth: number
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
    $myShortAddress = await getShortAddress()
    thisWidth > 768 && (await addChain())
    $chainId = await getChainId()
    $isConnect = true
    testNetwork()
    accountsChanged()
    chainChanged()
  }
</script>

<svelte:window bind:innerWidth="{thisWidth}" />

{#if $isConnect === true}
  <div
    class="btn"
    on:click="{() => {
      $userInfoMenu = !$userInfoMenu
    }}"
  >
    {$myShortAddress}
  </div>
{:else}
  <div class="btn" on:click="{connectWallet}">Wallet Connect</div>
{/if}

<style lang="scss">
  .btn {
    padding: 5px 20px 5px 20px;
  }
</style>
