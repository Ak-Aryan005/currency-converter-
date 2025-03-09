// const apiKey=`6f04125df4d282c7cf867198`;
// const url=` https://v6.exchangerate-api.com/v6/6f04125df4d282c7cf867198/latest/USD`;
let mes=document.querySelector("#mes")
const buttn=document.querySelector("#btn")
buttn.addEventListener("click",ex)

    async function ex(){
        let inp=document.querySelector('#txt')
        let val=inp.value
       console.log(val)
       const link= `https://v6.exchangerate-api.com/v6/6f04125df4d282c7cf867198/latest/${l1.options[l1.selectedIndex].text}`
       let response= await fetch(link)
       let data=await response.json()
       console.log(data)
       let Currency = l1.options[l1.selectedIndex].text;
       let targetCurrency = l2.options[l2.selectedIndex].text;
            let convertedValue =  data.conversion_rates[targetCurrency] * val;
            if ( data.conversion_rates[targetCurrency] < 1) {
                // mes.innerHTML = val +Currency + convertedValue
                mes.innerHTML=`${val} ${Currency} = ${convertedValue} ${targetCurrency}`
            } else {
                // mes.innerHTML = Math.floor(convertedValue);
                let flr=Math.floor(convertedValue)
                mes.innerHTML=`${val} ${Currency} =  ${flr} ${targetCurrency}`
    
            }
    
    }
    