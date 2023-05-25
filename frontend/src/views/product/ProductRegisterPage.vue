<template lang="">
    <div>
        <h2>상품 등록</h2>
        <product-register-form @submit="onSubmit"/> 
    </div>
</template>

<script>
import ProductRegisterForm from '@/components/product/productRegisterForm.vue'
import { mapActions } from 'vuex';

const productModule = 'productModule' 

export default {
    components: {
        ProductRegisterForm,
    },
    name: "BoardRegisterPage",
    methods: {
        ...mapActions( 
            productModule, ['requestRegisterProductToSpring']
        ),
        async onSubmit (payload) {
            const product = await this.requestRegisterProductToSpring(payload)
            console.log('product: ' + JSON.stringify(product))
            
            await this.$router.push({
                name: 'ProductListPage',
            })
        }
    }
}
</script>

<style lang="">
    
</style>