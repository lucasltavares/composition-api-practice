<script setup>
</script>

<template>
<div class="wrapper">
    <div style="background: slateblue; color: #fff; padding: 1rem;">
        <slot name="header"></slot>
    </div>
    <slot></slot>
</div>
</template>

<style lang="scss" scoped>
.wrapper {
    margin: 2rem;
    background: #fff;
    box-shadow: rba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    margin-bottom: 2rem;
    border-radius: 1rem;
    overflow: hidden;
  }
</style>