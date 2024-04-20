<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .card {
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  }
</style>
