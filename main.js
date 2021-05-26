(()=>{"use strict";var e,t,s,r,o,u,n,i,c,a,l,d,h={689:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Templates=void 0;var s=function(){function e(){this.blockName="",this.courseName="",this.courses=[],this.blocks=[],this.course={course:"",numberOfStds:0,creditHours:0,taken:!1,Tutor:"",students:[]},this.block={classroom:"",size:0,startTime:0,endTime:7,day:"Monday"},this.errorMsg="",this.errorMsg2="",this.displayMsg=""}return e.prototype.getCourseName=function(){this.courseNameValue=document.getElementById("CourseName"),this.courseNameValue.value?this.course.course=this.courseNameValue.value:this.errorMsg="course name cannot be blank"},e.prototype.getNoOfStds=function(){this.NoOfStdsValue=document.querySelector("#NoOfStds"),this.NoOfStdsValue&&+this.NoOfStdsValue.value>0?this.course.numberOfStds=+this.NoOfStdsValue.value:this.errorMsg="Number of stds must not be empty and should be greater than zero"},e.prototype.gethours=function(){this.creditHourValue=document.querySelector("#hours"),this.creditHourValue&&+this.creditHourValue.value>0?this.course.creditHours=+this.creditHourValue.value:this.errorMsg="credit hours must not be empty and should be greater than zero"},e.prototype.gettutor=function(){this.tutorValue=document.querySelector("#tutor"),this.tutorValue.value?this.course.Tutor=this.tutorValue.value:this.errorMsg="Tutor cannot be empty"},e.prototype.getstds=function(){if(this.stdsValue=document.querySelector("#stds"),this.stdsValue.value){var e=this.stdsValue.value.split(",");console.log(e);for(var t=0,s=e;t<s.length;t++){var r=s[t];this.course.students.push(r)}}else this.errorMsg="stds cannot be empty"},e.prototype.getCourse=function(){if(this.course.creditHours>2){this.course.creditHours-=2,this.course.taken=!0,this.courses.push(this.course);var e={course:this.course.course,Tutor:this.course.Tutor,taken:!1,numberOfStds:this.course.numberOfStds,creditHours:2,students:this.course.students};this.courses.push(e),this.courseName=this.course.course,this.resetCourse(),this.sortCourses()}else this.courses.push(this.course),this.courseName=this.course.course,this.resetCourse(),this.sortCourses()},e.prototype.resetCourse=function(){this.course={course:"",numberOfStds:0,creditHours:0,taken:!1,Tutor:"",students:[]},this.stdsValue.value="",this.tutorValue.value="",this.NoOfStdsValue.value="",this.creditHourValue.value="",this.courseNameValue.value=""},e.prototype.getBlockName=function(){this.blockNameValue=document.querySelector("#NameOfClass"),this.blockNameValue.value?this.block.classroom=this.blockNameValue.value:this.errorMsg2="block name cannot be empty"},e.prototype.getBlockCapacity=function(){this.blockCapacityValue=document.querySelector("#capacity"),this.blockCapacityValue.value&&this.blockCapacityValue.value>0?this.block.size=+this.blockCapacityValue.value:this.errorMsg2="capacity must not be empty and should be greater than zero"},e.prototype.getBlock=function(){this.blocks.push(this.block),this.blockName=this.block.classroom,this.resetBlock(),this.sortBlocks()},e.prototype.resetBlock=function(){this.block={classroom:"",size:0,startTime:0,endTime:7,day:"Monday"},this.blockNameValue.value="",this.blockCapacityValue.value=""},e.prototype.checkLength=function(){return!!this.blocks.length&&!!this.courses.length},e.prototype.checkLimit=function(){var e=this.courses.sort((function(e,t){return t.numberOfStds-e.numberOfStds}))[0],t=this.blocks.sort((function(e,t){return t.size-e.size}))[0];console.log(e,"from course"),console.log(t,"from block"),e.numberOfStds>t.size&&(this.displayMsg='<h3 style="text-align:center">there\'s no block that can contain '+e.numberOfStds+" stds of "+e.course+"</h3>")},e.prototype.sortCourses=function(){this.courses.sort((function(e,t){return t.creditHours-e.creditHours}))},e.prototype.sortBlocks=function(){this.blocks.sort((function(e,t){return e.size-t.size}))},e}();t.Templates=s},712:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GenerateTimetable=void 0;var s=function(){function e(e,t){this.classes=e,this.courses=t,this.provisionalTimetable=[],this.days=["Monday","Tuesday","Wednesday","Thursday","Friday"]}return e.prototype.generateHour=function(){return this.courses.filter((function(e){return 0!==e.creditHours})).length},e.prototype.generateClass=function(){for(var e=this;this.generateHour();)this.courses.forEach((function(t){e.classes.forEach((function(s){if(s.size>t.numberOfStds&&t.creditHours)if(e.courses.filter((function(e){return!0===e.taken})).length===e.courses.length)s.day=e.generateDay(s.day,e.courses);else if(!t.taken)if(s.startTime<=9){var r=e.checkdayAndRoom(s);if(s.startTime=r?r.endTime:s.endTime,!e.checkForDuplicateTeach(s.startTime,t,s)&&!e.checkForDuplicateStd(s,t)&&!e.checkSameDay(s,t)){var o=e.generateTimePeriods(t.creditHours,t);t.taken=!0,s.endTime=s.startTime+o;var u=e.generateItimes(s,t);e.provisionalTimetable.push(u)}}else s.day=e.generateDay(s.day,e.courses),s.startTime=0,s.endTime=7}))}))},e.prototype.generateItimes=function(e,t){return{size:e.size,classroom:e.classroom,startTime:e.startTime,endTime:e.endTime,courseName:t.course,numOfstds:t.numberOfStds,day:e.day,tutor:t.Tutor,students:t.students}},e.prototype.checkdayAndRoom=function(e){var t=this.provisionalTimetable.filter((function(t){return t.day===e.day&&t.classroom===e.classroom}));return t[t.length-1]},e.prototype.checkForDuplicateTeach=function(e,t,s){return this.provisionalTimetable.filter((function(r){return e>=r.startTime&&e<r.endTime&&r.day===s.day&&r.tutor===t.Tutor}))[0]},e.prototype.checkForDuplicateStd=function(e,t){var s=!1,r=this.provisionalTimetable.filter((function(t){return e.startTime>=t.startTime&&e.startTime<t.endTime&&t.day===e.day}));return r&&r.forEach((function(e){return s=t.students.some((function(t){return e.students.includes(t)}))})),s},e.prototype.generateDay=function(e,t){var s=this.days.indexOf(e)+1;return t.forEach((function(e){e.taken=!1})),this.days[s]},e.prototype.checkSameDay=function(e,t){return this.provisionalTimetable.filter((function(s){return s.day===e.day&&s.courseName===t.course}))[0]},e.prototype.generateTimePeriods=function(e,t){var s=0;if(1===e&&(t.creditHours=t.creditHours-1,s=1),2===e&&(t.creditHours=t.creditHours-2,s=2),e>2){var r=[1,2],o=r[Math.floor(Math.random()*r.length)];t.creditHours=t.creditHours-o,s=o}return s},e}();t.GenerateTimetable=s}},m={};function f(e){var t=m[e];if(void 0!==t)return t.exports;var s=m[e]={exports:{}};return h[e](s,s.exports,f),s.exports}t=f(712),s=f(689),r=document.querySelector(".gen"),o=document.querySelector("table"),u=document.querySelector(".addCourse"),n=document.querySelector(".addBlock"),i=document.querySelector("#display1"),c=document.querySelector("#display2"),a=document.querySelector("#results"),l=document.querySelector(".gen"),d=new s.Templates,u.addEventListener("click",(function(){d.getCourseName(),d.getNoOfStds(),d.gethours(),d.getstds(),d.gettutor(),d.errorMsg?(i.textContent=d.errorMsg,setTimeout((function(){return i.textContent=""}),2e3),d.errorMsg=""):(d.getCourse(),i.textContent="the class "+d.courseName+" has been entered successfully",setTimeout((function(){return i.textContent=""}),1e3),d.checkLength()&&l.classList.remove("none"))})),n.addEventListener("click",(function(){d.getBlockName(),d.getBlockCapacity(),d.errorMsg2?(c.textContent=d.errorMsg2,setTimeout((function(){return c.textContent=""}),2e3),d.errorMsg=""):(d.getBlock(),c.textContent="the block "+d.blockName+" has been entered successfully",setTimeout((function(){return c.textContent=""}),1e3),d.checkLength()&&l.classList.remove("none"))})),r.addEventListener("click",(function(){if(a.classList.remove("none"),l.classList.add("none"),d.checkLimit(),d.displayMsg)a.innerHTML=d.displayMsg;else{e=new t.GenerateTimetable(d.blocks,d.courses),console.log(d.courses,"from courses"),e.generateClass();var s=function(){for(var t,s=0,r=e.provisionalTimetable;s<r.length;s++){var o=r[s];if(void 0===o.day){t="we run out of space is either you increase the number of classes "+o.size+" or the number of days1";break}t=!1}return t}();s?o.innerHTML+=s:e.provisionalTimetable.forEach((function(e){o.innerHTML+="\n                    \n                <tr>\n                    <td>"+e.courseName+"</td>\n                    <td>"+e.tutor+"</td>\n                    <td>"+e.students+"</td>\n                    <td>"+e.classroom+"</td>\n                    <td>"+e.day+"</td>\n                    <td>"+e.startTime+"</td>\n                    <td>"+e.endTime+"</td>\n\n                </tr>         \n            \n    "}))}}))})();
//# sourceMappingURL=main.js.map