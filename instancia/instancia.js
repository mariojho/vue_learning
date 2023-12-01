const { createApp, ref } = Vue

createApp({
    setup() {        
      const datos = ref({ message:"Hello Vue!", title1: "Título1", title2: "Title 2", title3: "Title 3", post1: "Lorem ipsul dolor sit", post2: "Lorem ipsul dolor sit", post3:"Lorem ipsul dolor sit" });
        return {
            datos
        }
    }
}).mount('#app')