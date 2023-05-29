<template lang="">
    <div align="center">
        <h2>상품 상세 정보</h2>
        <br></br>
        <product-read-form v-if="product" :product="product" @submit="onSubmit"/>
        <p v-else>로딩중 .......</p>
        <br>
        <router-link :to="{ name: 'ProductListPage' }">
            돌아가기
        </router-link>
    </div>
</template>
<script>
import ProductReadForm from '@/components/product/ProductReadForm.vue'
import { mapActions, mapState } from 'vuex';

const productModule = 'productModule'
const orderModule = 'orderModule'
export default {
    components: {
        ProductReadForm
    },
    props: {
        productId: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapState(productModule, ['product'])
    },
    methods: {
        ...mapActions(
            productModule, ['requestProductToSpring']
        ),
        ...mapActions(
            orderModule, ['requestRegistOrderToSpring']
        ),
        onSubmit(payload) {
            const { productId } = payload
            // localStorage.setItem("accountToken", 1) 테스트용 임시 데이터
            this.requestRegistOrderToSpring({ productId, userToken: localStorage.getItem("userToken") })
        }
    },
    async created() {
        await this.requestProductToSpring(this.productId)
        console.log(this.product)
    }
}
</script>
<style lang="">
    
</style>