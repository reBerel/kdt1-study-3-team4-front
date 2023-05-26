import axiosInst from '@/utility/axiosInst'

export default {
    requestRegisterProductToSpring ({}, payload) {
        return axiosInst.post('/product/register', payload)
            .then((res) => {
                if(res.data){
                alert('게시물 등록 성공!')
                return res.data} else{
                    alert('문제 발생')
                }
            })
            .catch(() => {
                alert('문제 발생!')               
            })
    },
}