<template>
    <header class="header relative inline-table">
        <img class="header-logo md:mb-10 mb-4" src="/icons/logo.svg" alt="App Logo" />
        <div><slot/></div>
    </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header {
    background: linear-gradient(90deg, $gray-color-2 -0.76%, $gray-color-1 50%);
    overflow: hidden;
    
    &-logo {
        width: 116px;
        height: 36px;
    }

    &::before {
        @media(width >= 764px) {
            content: "";
            position: absolute;
            transform: translate(80%, 32%);
            width: 200px;
            height: 152px;
            background: radial-gradient(ellipse at center, $primary-color);
            filter: blur(77px);
        }
    }

}
</style>