<template>
    <div style="text-align: center;">
        <div :style="{ marginTop: '50px' , marginBottom: '50px'}">
            <h2>주문 내역</h2>
        </div>
        <div class="centered" style="text-align: center;">
            <order-read-form v-if="order" :order="order"/>
            <p v-else>주문하신 내용이 없습니다.</p>
        </div>
        <p></p>
        <div style="text-align: center;">
            <router-link :to="orderHistoryPage">
                <v-btn color="gray" dark style="margin: 0px 5px 0px 0px;">뒤로가기</v-btn>
            </router-link>
            <v-btn color="red" dark @click="onDelete">주문취소</v-btn>
        </div>
    </div>
</template>

<script>
import OrderReadForm from '@/components/order/OrderReadForm.vue'
import { mapActions, mapState } from 'vuex'

const orderModule = 'orderModule'

export default {
    components: {
        OrderReadForm,
    },
    // props: {
    //     orderId: {
    //         type: String,
    //         required: true,
    //     },
    // },
    computed: {
        ...mapState(orderModule, ['order']),
        orderHistoryPage() {
        return '/order-history-page/' + (localStorage.getItem("userToken"))
      },
    },
    methods: {
        ...mapActions(
            orderModule, ['requestOrderToSpring', 'requestDeleteOrderSpring']
        ),
        async onDelete () {
            await this.requestDeleteOrderSpring(this.$router.currentRoute.params.orderId)
            await this.$router.push('/order-history-page/'+(localStorage.getItem("userToken")))
        }
    },
    created () {
        this.requestOrderToSpring(this.$router.currentRoute.params.orderId)
        
    },
    }

</script>

<style>
    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>