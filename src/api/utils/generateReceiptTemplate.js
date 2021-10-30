const styleTemp = require('./styleTemplate');

function forVets(arg) {
  var temp = '';
  arg.VetCases.forEach(v => {
    temp+= v.Vet.FirstName+' '+v.Vet.LastName+'<span class="commaSpn">,</span>'
  });
  // console.log(temp);
  return temp
}

function forServices(arg) {
  var temp = ''
    arg.CasePetServices.forEach(s => {
      temp+='<div class="tService">'+s.PetService.Name+'</div>'
    });
  // temp+='</div>'

  return temp
}

function forServicePrices(arg) {
  var temp = ''
    arg.CasePetServices.forEach(s => {
      temp+='<div class="tService">'+s.PetService.Price+' RSD</div>'
    });
  // temp+='</div>'

  return temp
}

function sumPrices(arg) {
  var sum = 0;
  arg.CasePetServices.forEach(p => {
    sum+= p.PetService.Price  
  });

  return sum;
}

function generateReceipt(arg) {
  var receiptStr = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Vet Clinic</title>
      <style>
      ${styleTemp}
      </style>
    </head>
    <body>
      <header class="clearfix">
        <h1>Receipt</h1>
        <div id="company" class="clearfix">
          <div>Vet Clinic</div>
          <div>455 Foggy Heights,<br /> AZ 85004, US</div>
          <div>(602) 519-0450</div>
          <div><a href="mailto:company@example.com">company@example.com</a></div>
        </div>
        <div id="project">
          <div><span class="prop">PET</span>${arg.Pet.Name}</div>
          <div class="vets"><span class="prop">VET</span>${forVets(arg)}</div>
          <div><span class="prop">OWNER</span class="prop">${arg.Pet.Owner.FirstName} ${arg.Pet.Owner.LastName}</div>
          <div><span class="prop">EMAIL</span><a href="mailto:${arg.Pet.Owner.Email}">${arg.Pet.Owner.Email}</a></div>
        </div>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th class="service">SERVICE</th>
              <th class="desc">DESCRIPTION</th>
              <th class="desc">PRICE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="service">${forServices(arg)}</td>
              <td class="desc">Test description text</td>
              <td class="price">${forServicePrices(arg)}</td>
            </tr>
            <tr>
              <td colspan="4">SUBTOTAL<br>
              ${sumPrices(arg)} RSD
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </body>
  </html>`;
  return receiptStr;
}

module.exports = generateReceipt;
