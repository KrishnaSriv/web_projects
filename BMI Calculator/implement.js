const form = document.querySelector('form')
// if we use here then empty value will be stored as no value will be entered
// const weight = parseInt(document.querySelector('#weight').value)
 
form.addEventListener('submit',function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    let bmi;
    if(height === ' ' || height < 0 || isNaN(height)){
        results.innerHTML = "please enter a valid height";
    }

    else if(weight === ' ' || weight < 0 || isNaN(weight)){
        results.innerHTML = "please enter a valid weight";
    }
    else{
         bmi = (weight/(height*height/10000)).toFixed(2);
        //results
        results.innerHTML = `<span>${bmi}</span>`
    }
    let category;

        if (bmi < 18.6) {
            category = "Underweight";
            results.style.color="brown";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = "Normal Weight";
            results.style.color="green";
        } else {
            category = "Overweight";
            results.style.color="red";
        }
        document.getElementById("category").innerHTML = category;
        
   
    
});

