import React, { useContext } from "react";
import { CardDeck, Container} from "react-bootstrap";
import Track from "./track";
import { Context } from "../context/context";

const Tracks = (props) => {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  if(track_list === undefined || track_list.length === 0) return <div></div>;

  const titles = track_list.map((item, index) => {
    return <Track key={index} track={item.track} />;
  });

  return (
    <Container className="mt-5">
      <h2>{heading}</h2>
      <CardDeck>{titles}</CardDeck>
    </Container>
  );
};

export default Tracks;
