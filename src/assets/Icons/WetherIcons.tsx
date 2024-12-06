// import React from "react";
import {
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiStormShowers,
} from "react-icons/wi";
import { MdOutlineGrain } from "react-icons/md";
import {
  FaCloud,
  FaEye,
  FaWind,
  FaTachometerAlt,
  FaTint,
  FaSun,
  FaCloudSun,
  FaSnowflake,
  FaPooStorm,
} from "react-icons/fa";

const WetherIcons = ({ iconName }) => {
  // console.log(iconName);
  switch (iconName) {
    case "cloudy":
      return <WiCloudy color="gray" />;
    case "rain":
      return <WiRain color="blue" />;
    case "snow":
      return <WiSnow color="lightblue" />;
    case "storm":
      return <WiThunderstorm color="darkgray" />;
    case "fog":
      return <WiFog color="lightgray" />;
    case "FaCloud":
      return <FaCloud color="lightgray" />;
    case "GiDroplet":
      return <FaTint color="lightgray" />;
    case "MdOutlineGrain":
      return <MdOutlineGrain color="lightgray" />;
    case "FaEye":
      return <FaEye color="lightgray" />;
    case "FaWind":
      return <FaWind color="lightgray" />;
    case "FaTachometerAlt":
      return <FaTachometerAlt color="lightgray" />;
    case "Ясно":
      return <FaSun />;
    case "Переменная облачность":
      return <FaCloudSun />;
    case "Облачно":
    case "Пасмурно":
      return <FaCloud />;
    case "Мгла":
    case "Туман":
      return <WiFog />;
    case "Дымка":
    case "Пыль":
    case "Песок":
    case "Зола":
      return <FaCloud />;
    case "Штормовой дождь":
      return <WiThunderstorm />;
    case "Снег":
    case "Легкий снег":
      return <FaSnowflake />;
    case "Дождь":
    case "Ливень":
    case "Мелкий дождь":
    case "Ливневый дождь":
    case "Небольшой ливневый дождь":
      return <WiRain />;
    case "Гроза":
      return <WiThunderstorm />;
    case "Град":
      return <WiStormShowers />;
    case "Сильный снег":
    case "Метель":
      return <WiSnow />;
    case "Тропический шторм":
    case "Ураган":
      return <FaPooStorm />;

    default:
      return <span>Icon not found</span>;
  }
};

export default WetherIcons;
