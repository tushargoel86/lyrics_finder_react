import React, { useEffect, useState } from "react";

export const Context = React.createContext();

export function Provider(props) {
  let initialState = {
    track_list: [],
    heading: "",
  };

  const [state, setState] = useState(initialState);
  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=${process.env.REACT_APP_COUNTRY}&f_has_lyrics=1&apikey=${process.env.REACT_APP_ACCOUNT_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setState({
          track_list: res.message.body.track_list,
          heading: "Top 10 tracks",
        });
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>
      {props.children}
    </Context.Provider>
  );
}
