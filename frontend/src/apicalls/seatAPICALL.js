import axios from "axios";


export const seatcall =async () =>{
    try{
      await axios.put("http://localhost:8080/seat/addSeat",{
        seatID:`${localStorage.getItem("seatId")}`,
        flightID:`${localStorage.getItem("fid")}`
      })

    }catch(e){
      console.log(e);
    }
  }