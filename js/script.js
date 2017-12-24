var options={
  start: "09:00 pm",
  end: "00:00 am",
  duration: "00:15",
  startEvery: "00:05"
}

var timepicker = new Timepicker('timepicker', options);

timepicker.addEventListener('clickTime', function(e){
  console.log(e.time);
}, true)
