/*hello everyone....just added background image to mk it colourful,but am thinking if the carrier logo can be outside the phone probably somewhere beside the phone so once anybody types his or her number the network logo will appear outside the phone or perharps is there a way we can make it somewhat like an alert message signifying u use a mtn then the logo or what do you guys think */  
const phone_code = {
    mtn : ['0803','0806','0703','0706','0813','0816','0810','0814','0903','0906'],
    airtel : ['0802','0808','0708','0704','0812','0701','0816','0901','0904'],
    
    glo:['0805', '0807','0811','0705','0815','0905'],
    
    etisalat:['0809', '0817','0818', '0908','0909']
}

const inputNode = document.getElementById('input-tel');

function phoneValidate(inputText) {
  const phone_reg = /^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return phone_reg.test(inputText);
}

let phone_num = '';
let telecoms = '';

// Get button values
const nodeList = document.querySelectorAll(".btn");
for (var i = 0; i < nodeList.length; i++) {
  // console.log(nodeList[i].innerHTML)
    nodeList[i].addEventListener('click', function(event) {
  switch(event.target.innerHTML) {    
    case "Del":
      inputNode.value = inputNode.value.slice(0, -1)
      phone_num = inputNode.value; 
      break;
    
    default:
      phone_num += event.target.innerHTML;
      inputNode.value = phone_num;
  }
  if (!phoneValidate(phone_num)) {
    alert('Enter a valid phone number of exactly 11 digits, not more, not less');
  }
})}

//Get input field values
inputNode.addEventListener("change", function() {
    phone_num = this.value
    if (!phoneValidate(phone_num)) {
      alert('Enter a valid phone number of exactly 11 digits, not more, not less');
    }
    
  let sliced_phoneNum = phone_num.slice(0, 4);

  const carrierNames = Object.keys(phone_code);

  carrierNames.forEach(keys => {
    if(Object.values(phone_code[keys]).includes(sliced_phoneNum))
  telecoms = keys;
 });
  
  function toggleClass (carrier) {
    if (carrier !== telecoms) return;
    inputNode.classList.add(carrier);  
    const selectedCarrierIndex = carrierNames.indexOf(carrier);
    carrierNames.splice(selectedCarrierIndex, 1);
    inputNode.classList.remove(...carrierNames); 
  }

  carrierNames.map((elm) => toggleClass(elm));
  });

//THINGS LEFT TO DO
//Decide on the advanced feature to add to our phonie app.      
 