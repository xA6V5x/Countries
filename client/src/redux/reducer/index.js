// DEFINE INITIAL STATE
const initialState = {
     countries: [],
     country: {},
     activities: [],
     activityDetail: {},
};

// CREATE REDUCER
function rootReducer(state = initialState, action) {
     const { type, payload } = action;

     switch (type) {
          case 'GET_ALL_COUNTRIES':
               return {
                    ...state,
                    countries: payload,
               };

          case 'GET_COUNTRY_BY_NAME':
               return {
                    ...state,
                    allCountries: payload,
               };

          case 'GET_COUNTRY_DETAILS':
               return {
                    ...state,
                    country: payload,
               };
          default:
               return state;
     }
}

export default rootReducer;
