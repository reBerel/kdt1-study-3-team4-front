<template lang="">
    <div>
        <account-creation-form @submit="onSubmit"/>
    </div>
</template>

<script>
import AccountCreationForm from '@/components/account/AccountCreationForm.vue'
export default {
    components: {
        AccountCreationForm
    }
}
</script>

<style lang="">
    
</style>
</style>