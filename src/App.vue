<template>
    <container>
        <common-header/>
        <common-footer/>
    </container>
</template>

<script>
import Container from './Layout/Container.vue'
import CommonHeader from './component/Header.vue'
import CommonFooter from './component/Footer.vue'
export default {
    components: {
        Container,
        CommonHeader,
        CommonFooter
    }
}
</script>
