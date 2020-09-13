import React, { useState, useContext } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/context";

const Search = (props) => {
  const [state, setState] = useContext(Context);
  const [validated, setValidated] = useState(false);
  const [songTitle, setSongTitle] = useState("");

  const searchTrack = (track) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_ACCOUNT_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setState({
          track_list: result.message.body.track_list,
          heading: "Search Results",
        });
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const title = { ...songTitle };
    title[event.target.name] = event.target.value;
    setSongTitle(title);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValidated(true);
      searchTrack(songTitle);
    } else {
      event.stopPropagation();
    }
  };

  return (
    <Container style={{ width: "30%" }} className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title className="text-center" as="h1">
            <FontAwesomeIcon icon={faMusic} /> Search For A Song
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            Get the lyrics for any track
          </Card.Subtitle>
          <br />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                required
                type="text"
                placeholder="Song title..."
                name="songTitle"
                onChange={handleChange}
              />
              <br />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Search;
