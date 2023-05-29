<template lang="">
    <div>
        <form @submit.prevent="onSubmit">
            <table>
                <tr>
                    <td class="productForm">상품명</td>
                    <td>
                        <input type="text" v-model="productName"/>
                    </td>
                </tr>            
                <tr>
                    <td class="productForm">판매자</td>
                    <td>
                        <input type="text" v-model="vendor" />
                    </td>
                </tr>
                <tr>
                    <td class="productForm">상품 가격</td>
                    <td>
                        <input type="number" v-model="productPrice" />
                    </td>
                </tr>
                <tr>
                    <td class="productForm">상품 상세 정보</td>
                    <td>
                        <textarea 
                        auto-grow
                        cols="50" rows="20" v-model="productDetails" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="file" id="files" ref="files"
                                multiple @change="handleFileUpload"/>
                    </td>
                </tr>
            </table>
            <div class="submitRegister">
                <v-btn type="submit" color="blue" style="margin: 0px 10px 0px 0px; color: white">등록</v-btn>
                <router-link :to="{ name: 'ProductListPage' }">
                    <v-btn>취소</v-btn>
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "ProductRegisterForm",
    data() {
        return {
            productName: '1',
            vendor: '1',
            productPrice: 1,
            productDetails: '1',
            userToken: '1',
            files: '',
        }
    },
    methods: {
        handleFileUpload() {
            console.log(this.files)

            this.files = this.$refs.files.files
            console.log(this.files)
        },
        onSubmit() {
            let formData = new FormData()
            this.userToken = localStorage.getItem("userToken")
            let productInfo = {
                productName: this.productName,
                vendor: this.vendor,
                productPrice: this.productPrice,
                productDetails: this.productDetails,
                userToken: this.userToken
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

<style scoped>
input {
    color: gray;
    width: 100%;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 300;
}

select {
    color: gray;
    width: 100%;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 8px 10px;
    font-size: 14px;
    font-weight: 300;
}

table {
    margin-left: 30px;
}

tr {
    height: 50px;
}

td.productForm {
    width: 150px;
    font-weight: 400;
}

textarea {
    margin-top: 10px;
    color: gray;
    border-style: solid;
    border-color: #bbb;
    padding-left: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    resize: none;
    border-radius: 8px;
}

div.submitRegister {
    margin-left: 280px;
    padding: 30px;
}
</style>