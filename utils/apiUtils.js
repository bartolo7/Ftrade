const fetch = require("node-fetch");

const SERVICE_INSTRUMENT_URL = `https://ftrade/service-instrument/${ticker}/price`;

const SEVICE_DEPOSIT_URL = 'https://ftrade/service-deposit';

const SERVICE_PASSWORD_URL = 'https://ftrade/password';

const SERVICE_LOGIN_URL = 'https://ftrade/login';

// NOTE:  Authorization header will need to be pass to contact the API in the cloud. 

const getInstrumentPrice = async ticker  => { 
  try {
    const ticker = ticker;
    const url = SERVICE_INSTRUMENT_URL;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
};

const postDepositToAccount = async (accno, amount) => {
  try{
    const body = {accno:accno, amount:amount, curCode:'SEK'}
    const response = await fetch(SEVICE_DEPOSIT_URL, {
	    method: 'post',
	    body: JSON.stringify(body),
	    headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();
    console.log(json);
    return json;

  }catch(error){
    console.log(error);
  }
}

const postPassword = async (user, password) => {
  return "To be implemented";
}

const postLogin = async (user, password) => {
  return "To be implemented";
}

const getOrder = async (order) =>{
  return "To be implemented";
}

const lib = {
  getInstrumentPrice,
  postDepositToAccount,
  postPassword,
  postLogin,
  getOrder
};

export { lib }; 

  