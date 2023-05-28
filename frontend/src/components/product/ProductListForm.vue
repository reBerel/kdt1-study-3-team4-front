<template lang="">
    <div>
        <h3>상품 목록</h3>
        <p></p>
        <table>
            <tr>
                <td align="center" width="2%">상품명</td>
                <td align="center" width="2%">상품가격</td>
                <td align="center" width="2%">상품 이미지</td>
            </tr>
            <p></p>
            <tr v-if="!products || (Array.isArray(products) && products.length === 0)">
                <td colspan="3">
                    현재 등록된 상품이 없습니다!
                </td>
            </tr>
            <tr v-else v-for="product in products" :key="product.productId">
                <td>
                    <router-link :to="{
                        name: 'ProductReadPage',
                        params: { productId: product.productId.toString() }}">
                        {{ product.productName }}
                    </router-link>
                </td>
                <td>
                    {{ product.productPrice }}
                </td>
                <td>
                    <v-img :src="require(`@/assets/uploadImgs/${product.productImageList[0]}`)" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"/>
                            </v-row>
                        </template>
                    </v-img>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array
        }
    }

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Song+Myung&display=swap');

h3 {
    color: darkslateblue;
    font-family: 'Song Myung', serif;
    text-shadow: 4px 4px 4px cornflowerblue;
    font-size: 40px;
}

table {
    border: 4px solid mediumpurple;
    font-family: 'Song Myung', serif;
    font-size: 20px;
}

td {
    border: 2px solid lightskyblue;
}
</style>