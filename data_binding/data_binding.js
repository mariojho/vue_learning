const { createApp, ref } = Vue

createApp({
    setup() {        
      const datos = ref({ title:"", post: "", title1: "Trip 1", title2: "Trip 2", title3: "Trip 3", post1: "Lorem ipsul dolor sit", post2: "Lorem ipsul dolor sit", post3:"Lorem ipsul dolor sit" });
        return {
            datos
        }
    }
}).mount('#app')