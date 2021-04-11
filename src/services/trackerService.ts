import api from "../api/axios";

export async function getMonthAxios() {
  return await api.get<any>("api/v1/spots/month?region=usa");
}

export async function getYearTrackerAxios() {
  return await api.get<any>("api/v1/spots/year?region=usa");
}
