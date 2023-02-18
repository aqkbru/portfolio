function SendMail() {
    var params = {
      from_name: document.getElementById("nome").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("testo").value
    };
  
    const serviceID = "service_kyotvvj";
    const templateID = "template_uiiep7i";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("nome").value = "";
          document.getElementById("email").value = "";
          document.getElementById("testo").value = "";
          alert("Messaggio inviato correttamente")
  
      })
  
  }

//   function SendMail() {
//     var params = {
//       from_name: document.getElementById("nome").value,
//       email_id: document.getElementById("email").value,
//       message: document.getElementById("testo").value
//     }
//     emailjs.send("service_kyotvvj", "template_uiiep7i", params).then(function (res){
//         alert("Messaggio inviato")
//     })
  
//   }