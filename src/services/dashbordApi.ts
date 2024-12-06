import axios from "axios";
import xml2js from "xml2js";

/**
 * Получает текущий IP-адрес.
 * @returns {Promise<string>} IP-адрес в виде строки.
 */
export const fetchIp = async () => {
  const response = await axios.get("https://api.ipify.org?format=json");
  return response.data.ip;
};

/**
 * Получает информацию о местоположении по IP-адресу.
 * @param {string} ipAddress - IP-адрес.
 * @returns {Promise<Object>} Объект с информацией о местоположении.
 */
export const fetchIpinfo = async (ipAddress) => {
  const response = await axios.get(`https://ipwhois.app/json/${ipAddress}`);
  return response.data;
};

/**
 * Получает информацию о погоде для указанного города.
 * @param {string} city - Название города.
 * @returns {Promise<Object>} Объект с данными о погоде.
 */
export const fetchWether = async (city) => {
  const response = await axios.get(`https://wttr.in/${city}?format=j1`);
  return response.data;
};

/**
 * Получает данные о криптовалюте.
 * @returns {Promise<Object>} Объект с данными о криптовалюте.
 */
export const fetchCrypto = async () => {
  const response = await axios.get(`https://api.coincap.io/v2/assets`);
  return response.data.data;
};

// /**
//  * Получает информацию о погоде для указанного города.
//  * @returns {Promise<Object>} Объект с данными о погоде.
//  */
// export const fetchNews = async () => {
//   const response = await axios.get("https://ria.ru/export/rss2/index.xml");
//   const parser = new xml2js.Parser();
//   const result = await parser.parseStringPromise(response.data);
//   console.log(result);
//   return response;
// };
