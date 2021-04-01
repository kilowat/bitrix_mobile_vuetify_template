// initial state
const state = () => ({
    count: 0
});

// getters
const getters = {
};

// mutations
const mutations = {
    SET_COUNT (state, val) {
        state.count = val
    }
};

// actions
const actions = {

    async fetchCount () {
        console.log();
        try{
            let response =  await this.BX.ajax.runAction('dev:mobile.item.add', {
                data: {
                    fields: {
                        ID: 1,
                        NAME: "test"
                    }
                }
            });
            console.log('ok');
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}