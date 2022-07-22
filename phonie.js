  const phone_code = {
    mtn : ['0803','0806','0703','0706','0813','0816','0810','0814','0903','0906'],
    airtel : ['0802','0808','0708','0704','0812','0701','0816','0901','0904'],
    
    glo:['0805', '0807','0811','0705','0815','0905'],
    
    etisalat:['0809', '0817','0818', '0908','0909']
  }
  
let inputNode = document.getElementById('input-tel');
inputNode.addEventListener("change", function() {
  const phone_num = this.value
  const sliced_phoneNUM = phone_num.slice(0, 4);
  let telecoms = "";

  Object.keys(phone_code).forEach(keys => {
    if(Object.values(phone_code[keys]).includes(sliced_phoneNUM))
  telecoms = keys;
  
  let img = inputNode.nextElementSibling;
 
  if (telecoms === 'mtn') {
    img.src = 'phonie-logos/mtn-logo.png';
  }
  else if (telecoms === 'airtel') {
    img.src = 'phonie-logos/airtel-logo.png';
  }
  else if (telecoms === 'glo') {
    img.src = 'phonie-logos/glo-logo.png';
  }
  else if (telecoms === 'etisalat') {
    img.src = 'phonie-logos/9mobile-logo.png';  
  }
 });
});
//THINGS LEFT TO DO

//Change the UI of the phonie app
//Refactor working code.
//Decide on the advanced feature to add to our phonue app.         
 