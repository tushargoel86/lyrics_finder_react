import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Lyrics = (props) => {
  const [lyrics, setLyrics] = useState("");
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  console.log(props.match.params.id);
  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_ACCOUNT_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setLyrics(data))
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  if (lyrics === undefined || Object.keys(lyrics).length === 0)
    return <div></div>;
  return (
    <Container className="mt-5">
      <strong>
        <Button className="btn btn-dark" onClick={goBack}>
          Back
        </Button>
      </strong>
      <Card>
        <Card.Body>
          {lyrics.message.body.lyrics.lyrics_body}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Lyrics;
