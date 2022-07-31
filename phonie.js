/*hello everyone....just added background image to mk it colourful,but am thinking if the carrier logo can be outside the phone probably somewhere beside the phone so once anybody types his or her number the network logo will appear outside the phone or perharps is there a way we can make it somewhat like an alert message signifying u use a mtn then the logo or what do you guys think */  
const phone_code = {
    mtn : ['0803','0806','0703','0706','0813','0816','0810','0814','0903','0906'],
    airtel : ['0802','0808','0708','0704','0812','0701','0816','0901','0904'],
    
    glo:['0805', '0807','0811','0705','0815','0905'],
    
    etisalat:['0809', '0817','0818', '0908','0909']
}

function phoneValidate(inputText) {
  const phone_reg = /^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (phone_reg.test(inputText)) {
    return true;
  } else {
    return false;
  }
}

let phone_num = '';
const inputNode = document.getElementById('input-tel');
const nodeList = document.querySelectorAll(".btn");
for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('click', function(event) {
      phone_num += event.target.innerHTML;
  console.log(phone_num,'hi');
})}

inputNode.addEventListener("change", function() {
  console.log(phone_num, 'love');
    phone_num += this.value
  let sliced_phoneNum = phone_num.slice(0, 4);
  let telecoms = "";

  Object.keys(phone_code).forEach(keys => {
    if(Object.values(phone_code[keys]).includes(sliced_phoneNum))
  telecoms = keys;
  
  let img = inputNode.nextElementSibling;
  // let img = document.getElementById('carrier-log');
 
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

function numberClick(type, value){
  let input = document.getElementsById("input-tel");
  if (type=="dial"){
    input.val(numberValues + value);
  }else if(type=='delete'){
    input.val("");
  }
};
//THINGS LEFT TO DO

//Change the UI of the phonie app
//Refactor working code.
//Decide on the advanced feature to add to our phonue app.         
 