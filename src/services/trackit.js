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

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("trackit")).token;
  const config = { headers: { Authorization: `Bearer ${auth}` } };
  return config;
}

function postCreateHabits(body) {
  let config = createHeaders();
  let promisse = axios.post(`${BASE_URL}habits`, body, config);
  return promisse;
}

function deleteHabit(id) {
  let config = createHeaders();
  let promisse = axios.delete(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
    config
  );
  return promisse;
}

function getHabits() {
  let config = createHeaders();
  let promisse = axios.get(`${BASE_URL}habits`, config);
  return promisse;
}

function getTodaysHabit() {
  let config = createHeaders();
  let promisse = axios.get(`${BASE_URL}habits/today`, config);
  return promisse;
}

function postHabitDone(id) {
  let config = createHeaders();
  let promisse = axios.post(`${BASE_URL}habits/${id}/check`, {}, config);
  return promisse;
}
function postHabitUndone(id) {
  let config = createHeaders();
  let promisse = axios.post(`${BASE_URL}habits/${id}/uncheck`, {}, config);
  return promisse;
}

function getHabitHistory() {
  let config = createHeaders();
  let promisse = axios.get(`${BASE_URL}habits/history/daily`, config);
  return promisse;
}

export {
  postRegistration,
  postLogin,
  postCreateHabits,
  getHabits,
  getTodaysHabit,
  postHabitDone,
  postHabitUndone,
  getHabitHistory,
  deleteHabit,
};
