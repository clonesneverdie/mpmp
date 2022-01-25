<script lang="ts">
  import { onMount } from 'svelte'
  import { myAddress, isConnect, signer } from '$stores/chain'
  import { connect, disconnect, connectState, addChain, testTransaction, getAddress } from '$lib/wallet/Wallet.svelte'
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
    $signer = await connect()
    $myAddress = await getAddress()
    await addChain()
    console.log($myAddress)
    $isConnect = true
    testNetwork()
  }
</script>

{#if $isConnect === true}
  <div on:click="{disconnect}">{data}</div>
{:else}
  <div on:click="{connectWallet}">Wallet Connect</div>
{/if}
