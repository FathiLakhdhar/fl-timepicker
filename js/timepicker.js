(function() {

  /*
  <div class="fl-timepicker">
    <span class="ion ion-chevron-left disabled"></span>
    <span class="ion ion-chevron-right"></span>
    <div class="times" style="display: inline-table;">
      <div class="fl-time">
        <span class="fl-heurs">12:00</span>
        <span class="fl-am-pm">am</span>
      </div>
      <div class="margin-right"></div>
      <div class="fl-time">
        <span class="fl-heurs">12:00</span>
        <span class="fl-am-pm">am</span>
      </div>
      ...
    </div>

  </div>
  */




  function Timepicker(idElem, options = {}) {


    var elem = document.getElementById(idElem);
    if (!elem) return;

    var timeDOMS = [];
    var max = 7;

    var start = "00:00 am";
    var end = "12:00 pm";
    var duration = "00:15";
    var startEvery = "00:00";


    var timepickerDOM = document.createElement('div');
    timepickerDOM.className = "fl-timepicker";

    var spanPrev = document.createElement('span');
    spanPrev.className = 'ion ion-chevron-left disabled';
    var spanNext = document.createElement('span');
    spanNext.className = 'ion ion-chevron-right';

    var timesDOM = document.createElement('div');
    timesDOM.style = "display : inline-table;"

    timepickerDOM.appendChild(spanPrev);
    timepickerDOM.appendChild(spanNext);
    timepickerDOM.appendChild(timesDOM);

    elem.appendChild(timepickerDOM);


    function render() {

      var s = regExTime(start);
      console.log(s)
      var sh = parseInt(s[1]);
      var sm = parseInt(s[2]);
      var smode = s[3].toLowerCase();

      var se = regExTime(startEvery);
      var seh = parseInt(se[1]);
      var sem = parseInt(se[2]);

      var d = regExTime(duration);
      var dh = parseInt(d[1]);
      var dm = parseInt(d[2]);



      console.log(sem)


      console.log(d)
      var xh = sh;
      var xm = sm;
      var xmode = smode;

      timeDOMS[0].hoursDOM.innerText = ((xh<10)?('0'+xh):xh) +':' + ((xm<10)?('0'+xm):xm);
      timeDOMS[0].modeTimeDOM.innerText = xmode;
      for (var i = 1; i < max; i++) {
        if( (xm+dm+sem)<60 ){
          xm+=dm+sem;
        }
        else{
          xm = (xm+dm+sem)-60;
          xh++;
          if(xmode == "am"){
            if(xh==12)xmode="pm";
            if(xh==13)xh=1;
          }else if(xmode == "pm"){
            if(xh==13) xh=1;
            if(xh==12){
              xh=0;
              xmode="am";
            }
          }

        }
        timeDOMS[i].hoursDOM.innerText = ((xh<10)?('0'+xh):xh) +':' + ((xm<10)?('0'+xm):xm);
        timeDOMS[i].modeTimeDOM.innerText = xmode;
      }
    }

    function initDOM() {

      for (var i = 0; i < max; i++) {
        var timeDOM = document.createElement('div');
        var hoursDOM = document.createElement('span');
        var modeTimeDOM = document.createElement('span');
        timeDOM.className = 'fl-time';
        hoursDOM.className = 'fl-hours';
        modeTimeDOM.className = 'fl-am-pm';

        timeDOM.appendChild(hoursDOM);
        timeDOM.appendChild(modeTimeDOM);
        timesDOM.appendChild(timeDOM);

        if (i < max - 1) {
          var marginRightDOM = document.createElement('div');
          marginRightDOM.className = 'margin-right';
          timesDOM.appendChild(marginRightDOM);
        }
        timeDOMS.push({
          timeDOM,
          hoursDOM,
          modeTimeDOM
        });
      } /* end for */

    } /* end fn initDOM */


    function regExTime(time) {
      return /^([0][0-9]|[1][0-2]):([0-5][0-9]).?(pm|am|.?)/i.exec(time);
    }


    (function init() {

      var Options = {
        start: "00:00 am",
        end: "12:00 pm",
        duration: "00:30",
        startEvery: "00:05",
        max: 7
      }
      Object.assign(Options, (typeof options === "object") ? options : {});
      console.log(Options)

      start = Options.start;
      end = Options.end;
      duration= Options.duration;
      startEvery= Options.startEvery;
      max = Options.max;

      initDOM();
      render();

    })();
  }


  window['Timepicker'] = Timepicker;

})();
