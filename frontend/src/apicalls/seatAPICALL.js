import axios from "axios";


export const seatcall =async () =>{
    try{
      await axios.put("http://192.168.1.73:8080/seat/addSeat",{
        seatID:`${localStorage.getItem("seatId")}`
      })

    }catch(e){
      console.log(e);
    }
  }