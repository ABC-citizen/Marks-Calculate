const inputs = document.querySelectorAll('input');
const inputsArr = Array.from(inputs);
console.log(inputsArr);
inputsArr.forEach(inp => {
    inp.addEventListener('input', function () {
        const math = document.getElementById('maths');
        const computer = document.getElementById('computer');
        const physics = document.getElementById('physics');
        const chemistry = document.getElementById('chemistry');
        const result = document.getElementById('result');
        const results = document.getElementById('results');
        const resultss = document.getElementById('resultss');
        const failedorpss=document.getElementById('fp1');
        
        const mathvalue = parseFloat(math.value) || 0;
        const computervalue = parseFloat(computer.value) || 0;
        const chemistryvalue = parseFloat(chemistry.value) || 0;
        const physicsvalue = parseFloat(physics.value) || 0;
        const allsubjectsadding = (mathvalue + computervalue + chemistryvalue + physicsvalue).toFixed(2);
        const percentage = parseFloat((allsubjectsadding / 400) * 100).toFixed(2);


        failedorpss.textContent = '';
        
        // Validate input values
        if (mathvalue < 0 || mathvalue>100) {
            failedorpss.textContent = 'Please enter a valid number for Maths';
            return; // Stop further execution
        }
        if (computervalue < 0 || computervalue>100) {
            failedorpss.textContent = 'Please enter a valid number for Computer';
            return;
        }
        if (chemistryvalue < 0 || chemistryvalue>100) {
            failedorpss.textContent = 'Please enter a valid number for Chemistry';
            return;
        }
        if (physicsvalue < 0 || physicsvalue>100) {
            failedorpss.textContent = 'Please enter a valid number for Physics';
            return;
        }

        resultss.textContent = `percentage: ${percentage} %`;
        result.textContent = `maths:${mathvalue},chemistry${chemistryvalue},physics:${physicsvalue} ,computer:${computervalue}`
        results.textContent = `All Numbers:${allsubjectsadding}`;
        
    })
})
// 03422264005