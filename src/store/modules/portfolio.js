const state = {
  funds: 10000,
  stocks: []
};

const getters = {
  stockPortfolio: (state, getters) => { // getters refer to all getters in protfolio or store
    return state.stocks.map(stock => {
      // getters.stocks refers to stocks in stocks.js
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      }
    });
  },
  funds: state => state.funds
};

const actions = {
  sellStock: ({commit}, order) => commit('sellStock', order)
};

const mutations = {
  buyStock: (state, { id, price, quantity }) => {
    const record = state.stocks.find(element => element.id == id);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id,
        quantity
      });
    }
    state.funds -= price * quantity;
  },
  sellStock: (state, {id, price, quantity}) => {
    const record = state.stocks.find(element => element.id == id);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += price * quantity;
  },
  setPortfolio: (state,  portfolio) => {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}