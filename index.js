const { tasks } = require("./text.json");
//console.log(tasks);
const schedule = require("node-schedule");

//console.log(schedule);
tasks.forEach((e) => {
  let newdate = new Date(e.dateTime);
  console.log("Times at which following tasks will run:-");
  console.log(newdate);

  const someData = schedule.scheduleJob(newdate, () => {
    // let startAt = new Date().getTime();
    // console.log(startAt);
    setTimeout(() => {
      let str = e.text,
        ans = "";
      for (i of str) {
        ans = i + ans;
      }
      console.log(ans);
      //let endAt = new Date().getTime();
    }, e.text.length * 1000);
    someData.cancel();
  });
});
