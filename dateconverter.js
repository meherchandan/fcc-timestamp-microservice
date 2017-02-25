//Method to convert input Date to natural and unix timestamp
module.exports = (req,res) =>{
  const INPUT_DATE = req.params.timestamp;
  const UNIX_MILLISECONDS = 1000;
  //check if input date is unix timestamp or natual date
  const date = (/^\d+$/.test(INPUT_DATE)) ? new Date(parseInt(INPUT_DATE)*UNIX_MILLISECONDS) : new Date(INPUT_DATE);
  
  const NATURAL  = isNaN(date) ? null :date.toLocaleString('en-US',{ month: "long",day:"numeric",year:"numeric" });
  const UNIX = isNaN(date) ? null : date.getTime()/UNIX_MILLISECONDS;
  return res.json({unix:UNIX, natural:NATURAL});
}