import {buyView, instrumentView, menu, search, portfolioView} from '../screens';

const selectSearchInstrument = async index => {
    const listSearchItem = await search.listSearchItem();
    const selectedItem = await listSearchItem[index];
    await selectedItem.click();
  };


const verifyOrderInApi = async (orderType, orderStatus, orderTotal, orderNoShare, orderPrice) => {
  const resp = await api.getOrder(orderAccount);
  expect(resp).toBeDefined();

  expect(resp.orderType).toBe(orderType);
  expect(resp.totalAmmount).toBe(orderTotal);
  expect(resp.state).toBe(orderStatus);
  expect(resp.sharePrice).toBe(orderPrice);
  expect(resp.noShare).toBe(orderNoShare);
  return resp.state ==='ACTIVE' ? true : false ;
};


const verifyOrderInUI = async (orderType, orderStatus, orderTotal, orderNoShare, orderPrice) => {
  
  //GET VALUES FROM UI ORDER VIEW 
};

export{ selectSearchInstrument, verifyOrderInApi, verifyOrderInUI };