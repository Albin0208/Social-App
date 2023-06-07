import { Card, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Post({ post }) {
  const [timeSincePost, setTimeSincePost] = useState("");

  useEffect(() => {
    console.log("Updated", post.date, post.time);
    const timeDifference =
      (Date.now() - new Date(`${post.date}:${post.time}`).getTime()) / 1000; // Calculate the time difference in seconds
    const minutes = Math.floor(timeDifference / 60); // Convert seconds to minutes
    const hours = Math.floor(timeDifference / 3600); // Convert seconds to hours
    const days = Math.floor(timeDifference / 86400); // Convert seconds to days
    const weeks = Math.floor(days / 7); // Convert days to weeks

    if (minutes < 1) {
      setTimeSincePost("Just now");
    } else if (minutes < 60) {
      setTimeSincePost(
        `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`
      );
    } else if (hours < 24) {
      setTimeSincePost(`${hours} ${hours === 1 ? "hour" : "hours"} ago`);
    } else if (days < 7) {
      setTimeSincePost(`${days} ${days === 1 ? "day" : "days"} ago`);
    } else {
      setTimeSincePost(`${weeks} ${weeks === 1 ? "week" : "weeks"} ago`);
    }
  }, []);

  return (
    <Card className="mt-1 mx-auto" style={{ width: "40rem" }}>
      <Card.Header>
        {post.user} - {timeSincePost}
      </Card.Header>
      <Card.Img variant="top" src={post.img} />
      <Card.Body className="px-0 pt-0">
        <Row className="px-0">
          <Col className="mx-0">
            <Button variant="" className="p-2">
              <i className="bi bi-heart fs-4"></i>
            </Button>
            <Button variant="" className="px-0">
              <i className="bi bi-chat fs-4"></i>
            </Button>
            <Button variant="" className="p-2">
              <i className="bi bi-send fs-4"></i>
            </Button>
          </Col>
        </Row>
        <Card.Text className="px-2">{post.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
