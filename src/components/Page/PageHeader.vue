<template>
  <q-header bordered class="page-header absolute-top bg-white text-dark">
    <q-toolbar>
      <slot name="buttons-left"></slot>
      <q-toolbar-title class="text-center absolute-center text-body1 q-pl-none">
        <slot name="title"></slot>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
