import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FetchData() {
  // Untuk nampilin Data api KeUI Browser
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(news);
  // console.log(news);
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
      setIsLoading(true);
      const result = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/blogs"
        // Disini get memiliki 2 parameter yang pertama url, yang kedua headres jika membutuhkan
        // sedangkan kalo post itu memiliki bisa 3 paramater yaitu: url, headers dan  payloadnya
      );
      // console.log(result.data);
      setNews(result.data);
    };
    getApiSpaceFlight();
  }, []);

  return (
    <>
      {isLoading
        ? news.map((data) => {
            return (
              <>
                <div
                  key={data.id}
                  style={{
                    border: "solid 1px black",
                    width: "50%",
                    textAlign: "center",
                    margin: "10px auto",
                    alignItems: "center",
                  }}
                >
                  <p> title :{data.title}</p>
                  <p> url :{data.url}</p>
                  <p> newsSite :{data.newsSite}</p>
                  <p> summary :{data.summary}</p>
                </div>
              </>
            );
          })
        : "Loading"}
    </>
  );
}
