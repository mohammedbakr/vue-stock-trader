import stocks from "../../data/stocks";

const state = {
    stocks: []
};

const getters = {
    stocks: state => state.stocks
};

const actions = {
    initStocks: ({commit}) => commit('setStocks', stocks),
    buyStock: ({commit}, order) => commit('buyStock', order),
    rndStocks: ({commit}) => commit('randomStocks')

};

const mutations = {
    setStocks: (state, stocks) => state.stocks = stocks,
    randomStocks: state => {
        state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
};

export default  {
    state,
    getters,
    mutations,
    actions
}