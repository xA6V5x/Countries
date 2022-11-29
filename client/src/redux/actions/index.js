// IMPORTAR AXIOS
import axios from 'axios';

export const getAllCountries = () => {
     return async (dispatch) => {
          try {
               let allCountries = await axios.get('http://localhost:3001/countries');
               return dispatch({
                    type: 'GET_ALL_COUNTRIES',
                    payload: allCountries.data,
               });
          } catch (error) {
               console.log(error);
          }
     };
     //  return async function (dispatch) {
     //       return fetch('http://localhost:3001/countries')
     //            .then((response) => response.json())
     //            .then((json) => dispatch({ type: GET_ALL_COUNTRIES, payload: json }));
     //  };
};

export const getCountryDetails = (id) => {
     return async function (dispatch) {
          try {
               let countryInfo = await axios.get(`http://localhost:3001/countries/${id}`);
               return dispatch({
                    type: 'GET_COUNTRY_DETAILS',
                    payload: countryInfo.data,
               });
          } catch (error) {
               console.log(error);
          }
          // return (fetch(`http://localhost:3001/countries/${id}`)
          // .then(response => response.json())
          // .then(json => {
          //   console.log(json)
          //   dispatch({type: GET_COUNTRY_DETAILS, payload: json})
          // }))
     };
};

export const getAllActivities = () => {
     return;
};

export const createActivity = () => {
     return;
};

export function getCountryByName(name) {
     return async function (dispatch) {
          const { data } = await axios.get(`http://localhost:3001/countries?name=${name}`);
          return dispatch({
               type: 'GET_COUNTRY_BY_NAME',
               payload: data,
          });
     };
}
