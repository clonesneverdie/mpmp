<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    }
  }
</script>

<script>
  export let title
</script>

<div class="error">
  <div class="error-title">Error</div>
  <div class="error-message">{title}</div>
</div>

<style lang="scss">
  .error-title {
    font-size: 10rem;
    color: $primary-color;
  }
  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .error-message {
    font-size: 2rem;
    color: $primary-color;
  }
</style>
