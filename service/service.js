const INTERES = 100;

let getMortgage = (body) => {
    let loan = body.priceHome - body.payInit;
    let interest = loan * (body.interestRate / 100);
    let payFinal = loan + interest;
    let months = body.years * 12;
    let payMonth = payFinal / months;
    response = {
        priceHome: body.priceHome,
        loanAmount: loan,
        payInit: body.payInit,
        payFinal: payFinal,
        monthsPay: payMonth
    }
    return response;
}

//vamos a seguir esta estructura para exportar nuestros modulos a otros ficheros/paquetes
module.exports = {
    getMortgage
}