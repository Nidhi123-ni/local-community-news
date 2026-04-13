const btn=document.getElementById('calculate');
btn.addEventListener('click',function(){
    let height=document.querySelector('#Height').value;
    let weight=document.querySelector('#Weight').value;
    if(height=='' || weight ==''){
        alert('Please fill out the input fields!');
        return;
    }
    height=height/100;
    let bmi=(weight/(height*height));
    bmi=bmi.toFixed(2);
    console.log(bmi);
    document.querySelector('#result').innerHTML=bmi;
    let status='';
    if(bmi < 18.5){
        status="Underweight 😕";
    }
    if(bmi >=18.5 && bmi < 25){
        status="Healthy 😊";
    }
    if(bmi >= 25 && bmi < 30){
        status = "Overweight 😐";

    }
    if(bmi>=30){
        status="Obese 🚨";
    }
    document.querySelector('.comment').innerHTML=`Health Category : you are <span id="comment">${status}</span>`

    

})