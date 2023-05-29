<template lang="">
    <v-container>
        <v-card class="box" width="460">
                        <v-card-text class="text-center px-12 py-16">
                            <v-form @submit.prevent="onSubmit" ref="form">
                                <div >
                                    <v-text-field
                                        v-model="email"
                                        label="이메일"
                                        required>
                                    </v-text-field>
                                    <v-text-field
                                        v-model="password"
                                        label="비밀번호"
                                        required>
                                    </v-text-field>
                                </div>

                                <v-btn type="submit" block x-large rounded
                                        color="teal lighten-1" class="mt-5"
                                        style="color:white"
                                        >로그인</v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
    </v-container>
  </template>
  
<script>
import axiosInst from '@/utility/axiosInst'
import { mapActions } from 'vuex';
const MemberModule = 'MemberModule'


export default {
  data() {
    return {
      email: '',
      password: '',
      userToken: '',
    }
  },
  methods: {
    onSubmit() {
      const { email, password } = this
      axiosInst.post('/account/login', { email, password })
        .then((res) => {
          this.userToken = res.data
          if (!this.userToken) {
            alert('입력 정보가 잘못되었습니다!')
          } else {
            localStorage.setItem("userToken", this.userToken)
            this.setUserToken(this.userToken)
            alert('로그인 성공!')
          }
        })
        
    },
    ...mapActions(
      MemberModule, ['setUserToken']
    )
  }
}
</script>
<style scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>