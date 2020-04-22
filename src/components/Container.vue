<template>
    <div id="container">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "Container"
  }
</script>

<style scoped>
    #container {
        padding: 24px 12px;
    }
</style>