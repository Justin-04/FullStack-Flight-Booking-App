import axios from "axios";
export const emailCall = async () => {
    try {
      await axios.post(
        "http://localhost:8080/email",
        {
          email: "chahine.justin6@gmail.com",
          name: "justin",
          flightId: localStorage.getItem("fid"),
          date: localStorage.getItem("date"),
          price: localStorage.getItem("price"),
          seatNumber: localStorage.getItem("clickedSeat"),
          seatClass: localStorage.getItem("class"),
        },
        {
          headers: {
            authorization: `${localStorage.getItem("token")}`
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  