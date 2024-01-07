const form = document.getElementById('amountConversion')
const input = document.getElementById('amount')
const result = document.getElementById('result')
const from = document.getElementById('fromMoney')
const to = document.getElementById('toMoney')
const mySwitch = document.getElementById('mySwitch')



form.addEventListener('submit', function(e){
    e.preventDefault()
})



const fetchCurrencies = async () => {
        try {
            let fetching = await fetch('https://v6.exchangerate-api.com/v6/cbac1e96d29a78698475972c/codes')
            let currenciesJson = await fetching.json()  
            let currencies = currenciesJson.supported_codes
        for(currency of currencies){
            let newOption = document.createElement('option')
            newOption.setAttribute('value', `${currencies[0]}`)
            newOption.innerHTML = `${currency[0]} - ${currency[1]}`
            from.append(newOption)
        }
        for(currency of currencies){
            let newOption = document.createElement('option')
            newOption.setAttribute('value', `${currencies[0]}`)
            newOption.innerHTML = `${currency[0]} - ${currency[1]}`
            to.append(newOption)
        }

        
 
        form.addEventListener('submit', async function(){

            let fromCurrency = currencies[from.selectedIndex][0]        
            let toCurrency = currencies[to.selectedIndex][0]        
            let fetchingConversion = await fetch(`https://v6.exchangerate-api.com/v6/cbac1e96d29a78698475972c/pair/${fromCurrency}/${toCurrency}`)
            let conversionJson = await fetchingConversion.json()
            let amount = conversionJson.conversion_rate
            result.innerText = `${amount*input.value} ${toCurrency}`
        })

        mySwitch.addEventListener('click', async function(){
            let from1 = from.selectedIndex
            let to1 = to.selectedIndex
            to.selectedIndex = from1
            from.selectedIndex = to1
            
        })
        
        
        } catch (error) {
        console.log('error in fetchingCurrencies', error)
        }
    }
    


fetchCurrencies()

