//Method to return current Date as UTC and UNIX timestamp
const defaultDate = (req,res) => {
  const date = new Date();  
  res.json({utc:date.toUTCString(),unix:date.getTime()});
}
//Method to convert input Date to UTC and UNIX timestamp
const convertDate = (req,res) =>{
  const inputDate = req.params.timestamp;
  const error = "Invalid Date";
  
  //check if input date only contains numbers
  const date = (/^\d+$/.test(inputDate)) ? new Date(parseInt(inputDate)) : new Date(inputDate);
  //check if date is valid
  if(isNaN(date)){
    //Error! Date is not a valid UTC or UNIX timestamp
    return res.json({error});
  }

  //convert Date to UTC format
  const utc  = date.toUTCString();
  //convert Date to UNIX timestamp
  const unix = date.getTime();
  //Return valid UTC and UNIX timestamp
  return res.json({utc,unix});
}
module.exports = {defaultDate,convertDate};