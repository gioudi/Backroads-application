import React, { FC, Fragment, useEffect, useState } from "react";
import { createApi } from "unsplash-js";

import TourCard from "./TourCard";
import Title from "./Title";


const api = createApi({
  accessKey: `${process.env.REACT_APP_ACCESS_KEY}`
});


const Tours: FC = () => {
  const [data, setResponse] = useState(null);
  useEffect(() => {
    api.search
      .getPhotos({ query: "trips", orientation: "landscape" })
      .then(result => {
        setResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>Try again later!</div>
      </div>
    );
  } else {
    return (
      <div className="section">
        <Title title={'Featured'} subTitle={'tours'}></Title>
        <ul className="columnUl">
          {data.response.results.map(photo => (
            <li key={photo.id} className="li">
              <TourCard payload={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Tours;