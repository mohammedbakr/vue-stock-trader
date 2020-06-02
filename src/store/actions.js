import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(res => res.json())
        .then(data => {
            if(data) {
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;
                const stocks = data.stocks;

                const portfolio = {
                    funds,
                    stockPortfolio
                };

                commit('setStocks', stocks);
                commit('setPortfolio', portfolio);
            }
        })
}