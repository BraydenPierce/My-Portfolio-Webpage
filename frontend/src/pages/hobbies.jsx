import { Container, Button, ButtonGroup } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { useState, useEffect, useCallback } from "react";

// Globals
const API_BASE = "http://localhost:4000";

const Hobbies = ({ isAdmin }) => {
  const [readingItems, setReadingItems] = useState([]);
  const [gamingItems, setGamingItems] = useState([]);
  const [dndItems, setDndItems] = useState([]);

  // Get the data of a specfic category
  // Called only by function refreshAll
  const fetchCategory = useCallback(async (category, setter) => {
    const res = await fetch(`${API_BASE}/hobbies?category=${category}`, {
      credentials: "include",
    });
    const data = await res.json();
    setter(data);
  }, []);

  // Load all hobby categories on initial render and reload
  // if the underlying fetch logic is replaced
  const refreshAll = useCallback(async () => {
    await Promise.all([
      fetchCategory("reading", setReadingItems),
      fetchCategory("videogames", setGamingItems),
      fetchCategory("dnd", setDndItems),
    ]);
  }, [fetchCategory]);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  // Function to be called that ensures the user is authenticated as an Admin
  const handleAdminApiError = async (res, fallbackMessage) => {
    if (res.ok) return null;
    let message = fallbackMessage;
    try {
      const data = await res.json();
      if (data?.error) message = data.error;
    } catch {}
    if (res.status === 401) message = "You must be logged in.";
    if (res.status === 403) message = "Admin access required.";
    return message;
  };

  // Function to add a new hobby into the database
  const openCreateForm = async () => {
    const category = window.prompt("Category: reading, videogames, or dnd");
    if (!category) return;
    if (!["reading", "videogames", "dnd"].includes(category)) {
      window.alert("Invalid category.");
      return;
    }

    const title = window.prompt("Title:");
    if (!title) return;

    const description = window.prompt("Description:") || "";
    const imageUrl = window.prompt("Image URL (optional):") || "";

    const res = await fetch(`${API_BASE}/hobbies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ category, title, description, imageUrl }),
    });

    const err = await handleAdminApiError(res, "Failed to create hobby.");
    if (err) return window.alert(err);

    await refreshAll();
  };

  // Handler for editing any of the hobby items
  const openEdit = async (item) => {
    const category =
      window.prompt("Category:", item.category) || item.category;
    if (!["reading", "videogames", "dnd"].includes(category)) {
      window.alert("Invalid category.");
      return;
    }

    const title = window.prompt("Title:", item.title);
    if (!title) return;

    const description =
      window.prompt("Description:", item.description || "") ?? item.description;
    const imageUrl =
      window.prompt("Image URL:", item.imageUrl || "") ?? item.imageUrl;

    const res = await fetch(`${API_BASE}/hobbies/${item._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ category, title, description, imageUrl }),
    });

    const err = await handleAdminApiError(res, "Failed to update hobby.");
    if (err) return window.alert(err);

    await refreshAll();
  };

  // Handler for deleting a hobbie from the database
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this hobby item?")) return;

    const res = await fetch(`${API_BASE}/hobbies/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const err = await handleAdminApiError(res, "Failed to delete hobby.");
    if (err) return window.alert(err);

    await refreshAll();
  };

  // Carousel renderer for each category of hobby
  const renderCarousel = (items) => (
    <Carousel className="hobby-carousel" pause="hover">
      {items.map((item) => (
        <Carousel.Item
          key={item._id}
          className="hobby-carousel-item"
          style={{ minHeight: "200px", borderRadius: "8px" }}
        >
          {item.imageUrl && (
            <div className="d-flex justify-content-center">
              <Image
                src={item.imageUrl}
                style={{ maxWidth: "300px", height: "auto", margin: "20px" }}
              />
            </div>
          )}
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            {isAdmin && (
              <ButtonGroup size="sm">
                <Button variant="secondary" onClick={() => openEdit(item)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                  Delete
                </Button>
              </ButtonGroup>
            )}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );

const hobbySections = [
  { title: "Reading", items: readingItems },
  { title: "Videogames", items: gamingItems },
  { title: "Dungeons & Dragons", items: dndItems },
];

  return (
      <Container className="mt-4 container-body shadow rounded-3">
        {hobbySections.map((section) => (
          <div key={section.title} className="hobby-section mb-4 p-3">
            <h2 className="hobby-title text-center">{section.title}</h2>
            {renderCarousel(section.items)}
          </div>
        ))}

        {isAdmin && (
          <div className="mt-3 ms-3">
            <Button onClick={openCreateForm}>Add Hobby</Button>
          </div>
        )}
      </Container>
  );
};

export default Hobbies;
