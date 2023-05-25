import axiosInst from '@/utility/axiosInst'

export default {
    requestRegisterProductToSpring ({}, payload) {
        const { productName, vendor, productPrice, productDetails, userToken } = payload
        return axiosInst.post('/product/register', { productName, vendor, productPrice, productDetails, userToken })
            .then((res) => {
                alert('게시물 등록 성공!')
                return res.data
            })
            .catch(() => {
                alert('문제 발생!')               
            })
    },
}