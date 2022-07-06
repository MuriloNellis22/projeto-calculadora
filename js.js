// o vídeo parou em 31:53
const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const button = document.querySelectorAll('#buttons-container button')

class calculator {
  constructor(previousOperationText, currentOperationText) {
      this.previousOperationText = previousOperationText
      this.currentOperationText = currentOperationText
      this.currentOperation = ""
  }

  addDigit(digit) {

    if (digit === '.' && this.currentOperationText.includes('.')) {
        return 
    }
    
    this.currentOperation = digit
    this.updateScreen()
 }

 updateScreen() {
     this.currentOperationText.innerText += this.currentOperation
 }
}

const calc = new calculator(previousOperationText, currentOperationText)

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        
        const value = e.target.innerText

        if (+value >= 0 || value === '.') {
            calc.addDigit(value)
        } else {
            console.log('op: ' + value)
        }
    })
})