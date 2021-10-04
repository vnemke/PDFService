const styleTemp = require('./styleTemplate');

function generateReceipt(vetCase) {
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
            <div><span>PET</span> ${vetCase.pet}</div>
            <div><span>VET</span> ${vetCase.vet}</div>
            <div><span>OWNER</span> ${vetCase.owner}</div>
            <div><span>EMAIL</span> <a href="mailto:john@example.com">john@example.com</a></div>
          </div>
        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th class="service">SERVICE</th>
                <th class="desc">DESCRIPTION</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="service">${vetCase.service}</td>
                <td class="desc">Test description text</td>
                <td class="unit">${vetCase.price}RSD</td>
              </tr>
              <tr>
                <td colspan="4">SUBTOTAL</td>
              </tr>
            </tbody>
          </table>
        </main>
      </body>
    </html>
    `;
    return receiptStr;
}

module.exports = generateReceipt;
