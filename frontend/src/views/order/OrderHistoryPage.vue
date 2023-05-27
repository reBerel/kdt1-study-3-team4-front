<template>
    <div>
        <div style="text-align: left; margin: 20px;">
        </div>
        <order-history-form :orders="orders"/>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import OrderHistoryForm from '@/components/order/OrderHistoryForm.vue'
const orderModule = 'orderModule'

export default {
    components: { OrderHistoryForm},
    computed: {
        ...mapState(orderModule, ['orders']),
    },
    mounted () {
        this.requestOrderHistoryToSpring(1)
    },
    methods: {
        ...mapActions(
            orderModule, ['requestOrderHistoryToSpring']
        )
    }
}
</script>

<style>

</style>