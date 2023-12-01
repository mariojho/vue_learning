const { createApp, ref } = Vue

createApp({
    setup(){
        const message = ref('Hola Vue!')        
        return{
            message
        }
    },
    beforeCreate: function() {
        console.log("beforeCreate");
    },
    created: function(){
        console.log("created");
    },
    beforeMount: function(){
        console.log("beforeMount")
    },
    mounted: function(){
        console.log("mounted")
    },
    beforeUpdated: function(){
        console.log("beforeUpdated");
    },
    updated: function(){
        console.log("updated");
    },
    beforeDestroy: function(){
        console.log("beforeDestroy");
    },
    destroyed: function(){
        console.log("destroyed");
    },
    methods: {
        handleClick: function(){
            console.log(app2);
        }
    }
}).mount('#app')