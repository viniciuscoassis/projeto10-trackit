import axios from "axios";

let BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function postRegistration(body) {
  let promisse = axios.post(`${BASE_URL}auth/sign-up`, body);
  return promisse;
}

function postLogin(body) {
  let promisse = axios.post(`${BASE_URL}auth/login`, body);
  return promisse;
}

function postCreateHabits(body) {
  let promisse = axios.post(`${BASE_URL}habits`, body);
  return promisse;
}

// function deleteHabit(){

// }

function getHabits() {
  let promisse = axios.get(`${BASE_URL}habits`);
  return promisse;
}

function getTodaysHabit() {
  let promisse = axios.get(`${BASE_URL}habits/today`);
  return promisse;
}

function postHabitDone(id) {
  let promisse = axios.post(`${BASE_URL}habits/${id}/check`);
  return promisse;
}
function postHabitDeselect(id) {
  let promisse = axios.post(`${BASE_URL}habits/${id}/uncheck`);
  return promisse;
}

function getHabitHistory() {
  let promisse = axios.get(`${BASE_URL}habits/history/daily`);
  return promisse;
}

export {
  postRegistration,
  postLogin,
  postCreateHabits,
  getHabits,
  getTodaysHabit,
  postHabitDone,
  postHabitDeselect,
  getHabitHistory,
};
