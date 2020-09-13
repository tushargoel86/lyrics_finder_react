import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Track = (props) => {
  const { track } = props;
  const history = useHistory();

  const push = () => {
    history.push(`/lyrics/track/${track.track_id}`);
  };

  return (
    <Col md="6">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{track.artist_name}</Card.Title>
          <strong>
            <FontAwesomeIcon icon={faPlayCircle} />
            Track:
          </strong>
          {track.track_name}
          <br />
          <strong>
            <FontAwesomeIcon icon={faStopCircle} />
            Album:
          </strong>
          {track.album_name}
          <br />
          <strong>
            <Button className="btn btn-dark btn-block" onClick={push}>View Lyrics</Button>
          </strong>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default React.memo(Track);
