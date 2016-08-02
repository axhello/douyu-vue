<template>
  <div class="more-button">
    <slot></slot>
  </div>
</template>
<style lang='scss'>
  .more-button {
    width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 10px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
  }
</style>
