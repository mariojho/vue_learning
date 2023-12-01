const { createApp, ref } = Vue

createApp({
    setup(){
        const data = ref({ title: "Calculator", operator1: "0", operator2: "0", operator3: "0", operator4: "0" })
        const title = ref("Calculator");
        const operator1 = ref("0");
        const operator2 = ref("0");
        const operator3 = ref("0");
        const operator4 = ref("0");
        return{
            title, operator1, operator2, operator3, operator4, data
        }
    },
    computed: {
        resultSum: function(){
            let op1 = parseInt(this.operator1 === ''?'0':this.operator1);
            let op2 = parseInt(this.operator2 === ''?'0':this.operator2);
            console.log(op1 + ' + ' + op2 + ' = ' + (op1 + op2));
            return op1 + op2;
        },        
        resultSub: function(){
            let op3 = parseInt(this.operator3 === ''?'0':this.operator3);
            let op4 = parseInt(this.operator4 === ''?'0':this.operator4);
            console.log(op3 + ' - ' + op4 + ' = ' + (op3 - op4));
            return op3 - op4;
        }
    }
    
}).mount('#app')