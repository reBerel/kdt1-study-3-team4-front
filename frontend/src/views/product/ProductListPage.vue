<template lang="">
    <div>
        <div>     
        <p></p>
        <product-list-form :products="products"/>
    </div>
    <div v-if="isBusiness">
        <router-link to="product-register-page">
            <v-btn class="ma-2"
                outlined
                color="black">상품등록
            </v-btn>
        </router-link>
    </div>
    </div>
</template>
<script>

import ProductListForm from '@/components/product/ProductListForm.vue';
import { mapActions, mapState } from 'vuex';

const productModule = 'productModule'

export default {
    components: { ProductListForm },
    computed: {
        ...mapState(productModule, ['products']),
        isBusiness() {
        return "BUSINESS"===localStorage.getItem('role')
        }
    },
    methods: {
        ...mapActions(
            productModule, ['requestProductListToSpring']
        )
    },
    mounted() {
        this.requestProductListToSpring()
    },
    beforeMount() {
        localStorage.setItem("role", "BUSINESS") //임의로 확인하고 자 넣어둠 추후 삭제요망
    }
}
</script>
<style lang="">
    
</style>