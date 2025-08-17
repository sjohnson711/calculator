const display = document.getElementById("display")



const append = (value) => {
    display.value += value
}

const clearScreen = () => {
    display.value = ""
}

const deleteChar = () =>{
    display.value = display.value.slice(0, -1)
}

const calculate = () =>{
    try{
    display.value = eval(display.value)}
    catch{
        console.error('Not a true function')
        display.value= 'Not a real funcition'
    }
}