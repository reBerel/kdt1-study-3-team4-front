<template lang="">
    <div>
       <form @submit.prevent="onSubmit">
           <table>
              <tr>
                    <td class="productForm">상품명</td>
                    <td>
                        <input type="text" v-model="product.productName"/>
                    </td>
                </tr>
                <tr>
                    <td class="productForm">판매자</td>
                    <td>
                        <input type="text" v-model="product.vendor" />
                    </td>
                </tr>
                <tr>
                    <td class="productForm">상품 가격</td>
                    <td>
                        <input type="number" v-model="product.productPrice" />
                    </td>
                </tr>
                <tr>
                    <td class="productForm">상품 상세 정보</td>
                    <td>
                        <textarea 
                        auto-grow
                        cols="50" rows="20" v-model="product.productDetails" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="file" id="files" ref="files"
                                multiple @change="handleFileUpload"/>
                    </td>
                </tr>
            </table>
            <div>
                <button type="submit">수정 완료</button>
                <router-link :to="{
                    name:'ProductReadPage',
                    params: {productId: product.productId.toString()}
                }">수정 취소</router-link>
            </div>
        </form>
   </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,

        }
    },
    data() {
        return {
            productId: '',
            ImagesPathList: '',
            name: '',
            price: '',
            vendor: '',
            details: '',

        }
    },
    created() {
        this.ImagesPathList = this.product.ImagesPathList
        this.name = this.product.name
        this.price = this.product.price
        this.vendor = this.product.vendor
        this.details = this.product.details

    },
    methods: {
        handleFileUpload() {
            this.files = this.$refs.files.files
            console.log(this.files)
        },
        onSubmit() {
            let formData = new FormData()
            let productInfo = {
                productName: this.product.productName,
                vendor: this.product.vendor,
                productPrice: this.product.productPrice,
                productDetails: this.product.productDetails,
            }
            for (let i = 0; i < this.files.length; i++) {
                formData.append('imageFile', this.files[i])
            }
            formData.append('productInfo', new Blob([JSON.stringify(productInfo)], { type: "application/json" })
            )
            this.$emit('submit', formData)
        },

    }
}
</script>
<style lang="">
   
</style>