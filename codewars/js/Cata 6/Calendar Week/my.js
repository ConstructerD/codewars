function getCalendarWeek(date) {
  let dateObject = new Date(date);
  let dayNY = (dateObject.getDay() +6 ) % 7;
  dateObject.setDate(dateObject.getDate() - dayNY + 3);
  let jan4 = new Date (dateObject.getFullYear(), 0, 4);
  let diff = (dateObject - jan4) / 86400000;
  if (new Date(dateObject.getFullYear(), 0, 1).getDay() < 5){
    return 1 + Math.ceil(diff / 7);
  }
  else {
    return Math.ceil(diff / 7);
  }
}


function getCalendarWeek1(date) {
  let dateObject = new Date(date);
  let onejan = new Date(dateObject.getFullYear(),0,1);
    return Math.ceil(( ((dateObject - onejan) / 86400000) + onejan.getDay() + 1) / 7);
} 


function getCalendarWeek2(date) {
  let dateObject = new Date(date);
  let day_miliseconds = 86400000;
  let onejan = new Date(dateObject.getFullYear(),0,1,0,0,0);
  let onejan_day = (onejan.getDay()==0) ? 7 : onejan.getDay();
  let days_for_next_monday = (8-onejan_day);
  let onejan_next_monday_time = onejan.getTime() + (days_for_next_monday * day_miliseconds);
  // If one jan is not a monday, get the first monday of the year
  let first_monday_year_time = (onejan_day>1) ? onejan_next_monday_time : onejan.getTime();
  let this_date = new Date(dateObject.getFullYear(), dateObject.getMonth(),dateObject.getDate(),0,0,0);// This at 00:00:00
  let this_time = this_date.getTime();
  let days_from_first_monday = Math.round(((this_time - first_monday_year_time) / day_miliseconds));

  let first_monday_year = new Date(first_monday_year_time);

  // We add 1 to "days_from_first_monday" because if "days_from_first_monday" is *7,
  // then 7/7 = 1, and as we are 7 days from first monday,
  // we should be in week number 2 instead of week number 1 (7/7=1)
  // We consider week number as 52 when "days_from_first_monday" is lower than 0,
  // that means the actual week started before the first monday so that means we are on the firsts
  // days of the year (ex: we are on Friday 01/01, then "days_from_first_monday"=-3,
  // so friday 01/01 is part of week number 52 from past year)
  // "days_from_first_monday<=364" because (364+1)/7 == 52, if we are on day 365, then (365+1)/7 >= 52 (Math.ceil(366/7)=53) and thats wrong

return (days_from_first_monday>=0 && days_from_first_monday<364) ? Math.ceil((days_from_first_monday+1)/7) : 52;
}
function getCalendarWeek3(date) {
  let dateObject = new Date(date);
  let date1 = new Date(dateObject.getTime());
  date1.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date1.setDate(date1.getDate() + 3 - (date1.getDay() + 6) % 7);
  // January 4 is always in week 1.
  let week1 = new Date(date1.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date1.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

//Рабочий вариант последний. Прошел все тесты

console.log(getCalendarWeek("1995-12-31"));
console.log(getCalendarWeek1("1995-12-31"));
console.log(getCalendarWeek2("1995-12-31"));
console.log(getCalendarWeek3("1995-12-31"));
/**
 * Date.prototype.getWeek = function() { 

  // Create a copy of this date object  
  var target  = new Date(this.valueOf());  

  // ISO week date weeks start on monday, so correct the day number  
  var dayNr   = (this.getDay() + 6) % 7;  

  // Set the target to the thursday of this week so the  
  // target date is in the right year  
  target.setDate(target.getDate() - dayNr + 3);  

  // ISO 8601 states that week 1 is the week with january 4th in it  
  var jan4    = new Date(target.getFullYear(), 0, 4);  

  // Number of days between target date and january 4th  
  var dayDiff = (target - jan4) / 86400000;    

  if(new Date(target.getFullYear(), 0, 1).getDay() < 5) {
    // Calculate week number: Week 1 (january 4th) plus the    
    // number of weeks between target date and january 4th    
    return 1 + Math.ceil(dayDiff / 7);    
  }
  else {  // jan 4th is on the next week (so next week is week 1)
    return Math.ceil(dayDiff / 7); 
  }
}; 
 */