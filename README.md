# fl-timepicker
Plugin Time JavaScript 
![Capture Plugin timepicker JavaScript](https://github.com/FathiLakhdhar/fl-timepicker/blob/master/Capture.png)

## Exemple
### style
```
  <link rel="stylesheet" href="css/ionicons.min.css">
  <link rel="stylesheet" href="css/timepicker.css">
```

### html
```
  <h2 class="uppercase">Select a time</h2>

  <div id="timepicker"></div>
```

### script
```
  <script src="js/timepicker.js"></script>
  <script src="js/script.js"></script>
```
create script.js
```javascript
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

```
