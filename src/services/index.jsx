const API_DATA = {
  key: "d3e450d2020744e0a8d70037231108",
  base: "https://api.weatherapi.com/v1/",
};

export async function getWeatherData(query) {
  try {
    const res = await fetch(
      `${API_DATA.base}current.json?q=${query}&key=${API_DATA.key}`
    );

    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    if (res.status == 502) {
      // Status 502 is a connection timeout error,
      // may happen when the connection was pending for too long,
      // and the remote server or a proxy closed it
      // let's reconnect
      await getWeatherData();
    } else if (res.status != 200) {
      console.log(res.statusText);
      // Reconnect in one minute
      await new Promise((resolve) => setTimeout(resolve, 10000));
      await getWeatherData();
    }
    return await res.json();
    // console.log(data, "Indexxxxx");
    // return data;
  } catch (error) {
    console.log(error);
  }
}

// export default getWeatherData;
