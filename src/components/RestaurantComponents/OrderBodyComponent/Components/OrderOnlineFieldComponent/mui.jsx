import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  ThemeProvider,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  LinearProgress,
} from "@material-ui/core";

const mui = ({ clubID, username, name, phone }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    Axios.get(`/api/hotels/${clubID}/rooms`).then((response) => {
      setRooms(response.data);
    });
  }, [clubID]);

  const bookRoom = (roomID) => {
    Axios.post(`/api/bookings`, {
      clubID,
      roomID,
      username,
      name,
      phone,
    }).then((response) => {
      console.log("Booking successful!");
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "#212121" }}>
        <h1 style={{ color: "#fff" }}>Hotel Room Booking</h1>
        <ul>
          {rooms.map((room) => (
            <li key={room.id}>
              <Card>
                <CardMedia
                  image={room.image}
                  title={room.name}
                  style={{ height: 150, backgroundColor: "#424242" }}
                />
                <CardContent>
                  <Typography variant="h5" style={{ color: "#fff" }}>
                    {room.name}
                  </Typography>
                  <Typography variant="body1" style={{ color: "#fff" }}>
                    Price: ${room.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="purple"
                    onClick={() => bookRoom(room.id)}
                  >
                    Book
                  </Button>
                </CardActions>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
};

const theme = {
  typography: {
    fontFamily: "sans-serif",
    fontSize: 16,
    lineHeight: 1.5,
  },
  colors: {
    primary: "#424242",
    secondary: "#535353",
    accent: "#707070",
    background: "#212121",
    text: "#fff",
  },
};

export default mui;
