import Vuex from 'vuex';
import Vue from 'vue';
import * as Mutations from './mutations.js';

const state = {
    account: null,
    balance: null,
};

const mutations = {
    [Mutations.SET_ACCOUNT]:(state,newAccount) => {
        state.account = newAccount;
    },
};
const actions = {
    setAccount(context,account) {
        context.commit(Mutations.SET_ACCOUNT,account);
    }
}
Vue.use(Vuex);
export default new Vuex.Store({
    state,
    mutations,
    actions
});