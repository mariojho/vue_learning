const { createApp, ref } = Vue

createApp({
    setup(){
        const message = ref("Hola Vue!");
        return {
            message
        }
    },
    watch: {
        message: function(newValue, oldValue){
            console.log('oldValue=>', oldValue, ' newValue=> ', newValue);
        }
    }
}).mount('#app')