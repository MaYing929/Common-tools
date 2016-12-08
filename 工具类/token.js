/**
 * Created by maying on 16/12/8.
 */

module.exports = {
    getTOKEN() {
        const accountInfo = window.localStorage.getItem('accountInfo') || '{}';
        const {access_token} = JSON.parse(accountInfo);
        return access_token;
    },
    getSTAMP() {
        return new Date()*1;
    },
    createListParam(params){
        const {page = 1} = params;
        return {...params, page, limit: 10};
    },
    createlimitPage(page){
        return {page:page || 1, limit:8};
    }

}
