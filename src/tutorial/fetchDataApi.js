import React, { useEffect } from "react";
import axios from "axios";
export default function FetchData() {
  //Contoh ke 1
  // useEffect(() => {
  //   const api = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  //   console.log(api);
  // });

  //Contoh ke 2 pakai async await
  // useEffect(() => {
  //   const dataApi = async () => {
  //     const result = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
  //     const response = await result.json();
  //     console.log(response);
  //   };
  //   //panggil functionya
  //   dataApi();
  // });

  // Contoh ke 3 pakai Axios

  useEffect(() => {
    const getApiSpaceFlight = async () => {
      const result = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/blogs"
        // Disini get memiliki 2 parameter yang pertama url, yang kedua headres jika membutuhkan
        // sedangkan kalo post itu memiliki bisa 3 paramater yaitu: url, headers dan  payloadnya
      );
      console.log(result.data);
    };
    getApiSpaceFlight();
  });

  return <div>fetchData</div>;
}
