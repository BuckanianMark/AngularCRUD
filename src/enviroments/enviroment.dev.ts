export const enviroment ={
    production:false,
    BASE_URL: 'http://localhost:3000',
    CUSTOMER_BASE_URL:'http://localhost:3000/customers/',
    CUSTOMER_:{
        GET_ALL_CUSTOMERS:'list',
        GET_CUSTOMER:'view',
        UPDATE_CUSTOMER:'update',
        DELET_CUSTOMER:'delete',
        SEARCH_CUSTOMER:'search'
    },
    LOAN:{
        GET_ALL_LOANS:'list',
        GET_LOAN:'view',
        UPDATE_LOAN:'update',
        DELET_LOAN:'delete',
        SEARCH_LOAN:'search'
    }
}