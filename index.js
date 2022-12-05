// code your solution here
const saturdayFun = function (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  };
  saturdayFun();
  saturdayFun("playing online vedio games");

  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  mondayWork();
  mondayWork("finish work from school");

  const wrapAdjective = function (wrapper = "*") {
    const message = function (string = "special") {
      return `You are ${wrapper}${string}${wrapper}!`;
    };

    return message;
  };

  const result = wrapAdjective("||");

  const emphatic = result("great hard wprker");

  console.log(emphatic);
