'use strict';

// 오늘날짜를 전역변수로 생성...
const today = new Date();
const year = today.getFullYear();   // 연도 4자리
const month = today.getMonth() + 1;   // 월(기존월보다 1자리가 작다)
const date = today.getDate();     // 일
const hour = today.getHours();    // 시
const minute = today.getMinutes();  //분
const second = today.getSeconds();  //초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 표준날짜 출력함수
function fCheck1(){
  let date1 = new Date();
  console.log("date1 : ", date1);
  document.getElementById("demo").innerHTML = date1;
}

// 편집날짜 함수
function fCheck2() {
  let strDate = yymmdd;
  demo.innerHTML = strDate;
}

// 쉬운날짜 함수
function fCheck3() {
  let str = "";
  str += year+" 년 ";
  str += month+" 월 ";
  str += date+" 일 ";
  // 요일 : 0(일), 1(월), 2(화), 3(수), 4(목), 5(금), 6(토)
  // str += today.getDay() + "요일";     // 요일 : getDay()
  let week = ["일","월","화","수","목","금","토"];
  str += week[today.getDay()] + "요일";
  str += hour+ "시 ";
  str += minute+ "분 ";
  str += second+ "초";

  let strDate = str;
  demo.innerHTML = strDate;
}

// 시간출력 함수
function fCheck4() {
  // let strDate = today.getTime();
  let strTime = today.getMilliseconds();
  strTime = (today.getMilliseconds()/1000/60) + "초";
  let strDate = strTime;
  demo.innerHTML = strDate;
}

// 해당월의 마지막 일자꺼내기 함수
function fCheck5() {
  let syear = myform.year.value;
  let smonth = myform.month.value;
  let strDate = new Date(syear,smonth,0);   // new Date(년,월,일,시,분,초);
  // strDate += "해당월의 마지막 일자는?" + strDate.getDate();
  demo.innerHTML = "해당월의 마지막 일자는? "+syear+"년"+smonth+"월"+strDate.getDate()+"일";
}

function fCheck6() {
  let Nmonth = month;
  let Ndate = date;
  if(month<10){
    Nmonth = "0"+Nmonth;
  }
  if(date<10){
    Ndate = "0"+Ndate;
  }
  demo.innerHTML = year+"-"+Nmonth+"-"+Ndate;
}
