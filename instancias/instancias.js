const { createApp, ref } = Vue

createApp({
    setup() {        
      const datos = ref({ trip1: "Viaje 1", trip2: "Viaje 2", trip3: "Viaje 3", post1: "Lorem ipsul dolor sit", post2: "Lorem ipsul dolor sit", post3:"Lorem ipsul dolor sit" });
        return {
            datos
        }
    }
}).mount('#app')

createApp({
    setup() {        
      const datos = ref({ message:"Sumario", title1: "16/06/2019 Viaje 1", title2: "05/12/2018 Viaje 2", title3: "04/10/2018 Viaje 3"});
        return {
            datos
        }
    }
}).mount('#app1')