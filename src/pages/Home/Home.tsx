// import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchIp,
  fetchIpinfo,
  fetchWether,
  fetchCrypto,
} from "../../services/dashbordApi.ts";
import Wether from "../../components/Wether/Wether";
import styles from "./Home.module.scss";
import Crypto from "../../components/Crypto/Crypto.tsx";
import Social from "../../components/Social/Social.tsx";
import IpInfo from "../../components/IpInfo/IpInfo.tsx";
import ToDo from "../../components/ToDo/ToDo.tsx";
import ShortLink from "../../components/ShortLink/ShortLink.tsx";
// import News from "../../components/News/News.tsx";
// import { DiVim } from "react-icons/di";

const Home = () => {
  // Получение IP-адреса, обновляется каждые 15 минут
  const {
    data: ip,
    isLoading: isLoadingIp,
    error: errorIp,
  } = useQuery({
    queryKey: ["ip"],
    queryFn: fetchIp,
    refetchInterval: 1000 * 60 * 15,
  });

  // Получение информации по IP, обновляется каждые 15 минут
  const {
    data: ipinfo,
    isLoading: isLoadingIpinfo,
    error: errorIpinfo,
  } = useQuery({
    queryKey: ["ipinfo", ip],
    queryFn: () => fetchIpinfo(ip),
    enabled: !!ip,
    refetchInterval: 1000 * 60 * 15,
  });

  // Получение данных о погоде, обновляется каждые 15 минут
  const {
    data: wether,
    isLoading: isLoadingWether,
    error: errorWether,
  } = useQuery({
    queryKey: ["wether", ipinfo?.city],
    queryFn: () => fetchWether(ipinfo.city),
    enabled: !!ipinfo?.city,
    refetchInterval: 1000 * 60 * 15,
  });

  // Получение данных о криптовалюте, обновляется каждые 15 минут
  const {
    data: crypto,
    isLoading: isLoadingCrypto,
    error: errorCrypto,
  } = useQuery({
    queryKey: ["crypto"],
    queryFn: fetchCrypto,
    refetchInterval: 1000 * 60 * 15,
  });

  // Получение данных о новостях
  // const {
  //   data: news, // здесь мы извлекаем новости
  //   isLoading: isLoadingNews,
  //   error: errorNews,
  // } = useQuery({
  //   queryKey: ["news"],
  //   queryFn: fetchNews,
  //   refetchInterval: 100 * 60 * 15, // Обновление данных каждые 15 минут
  // });

  // Обработка загрузки и ошибок
  // if (isLoadingIp || isLoadingIpinfo || isLoadingWether || isLoadingCrypto) {
  //   return <div className={styles.home_loading}>Загрузка...</div>;
  // }

  if (errorIp || errorIpinfo || errorWether || errorCrypto) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <main className={styles.main}>
      {!isLoadingWether && (
        <div className={styles.div1}>
          <Wether {...wether} />
        </div>
      )}
      {!isLoadingIpinfo && (
        <div className={styles.div2}>
          <IpInfo {...ipinfo} />
        </div>
      )}
      {!isLoadingCrypto && (
        <div className={styles.div3}>
          <Crypto {...crypto} />
        </div>
      )}
      <div className={styles.div4}>
        <Social />
      </div>
      <div className={styles.div5}>
        <ToDo />
      </div>
      <div className={styles.div6}>
        <ShortLink />
      </div>
    </main>
  );
};

export default Home;
