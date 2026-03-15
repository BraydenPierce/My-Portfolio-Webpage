import { Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";
import { useState, useEffect } from "react";

const Hobbies = () => {
  const [readingItems, setReadingItems] = useState([]);
  const [gamingItems, setGamingItems] = useState([]);
  const [dndItems, setDndItems] = useState([]);

  useEffect(() => {
    const fetchCategory = async (category, setter) => {
      const res = await fetch(`http://localhost:4000/hobbies?category=${category}`, {
        credentials: "include",
      });
      const data = await res.json();
      setter(data)
    };

    fetchCategory("reading", setReadingItems);
    fetchCategory("videogames", setGamingItems);
    fetchCategory("dnd", setDndItems);
  }, []);

  return (
    <Container className="mt-4 bg-body-tertiary shadow rounded-3">
      <Row>
        <h1>Reading</h1>
        <Carousel className="w-100" variant="dark" pause="hover">
          {readingItems.map((item) => (
            <Carousel.Item key={item._id} style={{ minHeight: "200px", background: "#e9ecef", borderRadius: "8px" }}>
              {item.imageUrl && (
                <div className="d-flex justify-content-center">
                  <Image src={item.imageUrl} style={{ maxWidth: "300px", height: "auto", margin: "20px"}}/>
                </div>
              )}
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
      <Row>
        <h1>Videogames</h1>
        <Carousel className="w-100" variant="dark" pause="hover">
          {gamingItems.map((item) => (
            <Carousel.Item key={item._id} style={{ minHeight: "200px", background: "#e9ecef", borderRadius: "8px" }}>
              {item.imageUrl && (
                <div className="d-flex justify-content-center">
                  <Image src={item.imageUrl} style={{ maxWidth: "300px", height: "auto", margin: "20px"}}/>
                </div>
              )}
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
      <Row>
        <h1>DnD</h1>
        <Carousel className="w-100" variant="dark" pause="hover">
          {dndItems.map((item) => (
            <Carousel.Item key={item._id} style={{ minHeight: "200px", background: "#e9ecef", borderRadius: "8px" }}>
              {item.imageUrl && (
                <div className="d-flex justify-content-center">
                  <Image src={item.imageUrl} style={{ maxWidth: "300px", height: "auto", margin: "20px"}}/>
                </div>
              )}
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};

// 
export default Hobbies;
