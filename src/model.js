export const state = {
  practiceList: [],
};

//Initializes a new piece
export const setPracticeData = function (e) {
  const inputObj = {};
  Array.from(e.target).forEach((input) => {
    inputObj[input.id] = input.value;
  });

  return {
    composer: inputObj["composer"],
    piece: inputObj["piece"],
    measureNumbers: inputObj["measure-numbers"],
    excerptDescription: inputObj["excerpt-description"],
    startingTempo: +inputObj["starting-tempo"],
    goalTempo: +inputObj["goal-tempo"],
    repetitionsPerLevel: +inputObj["repetitions"],
    tempoIncreasePerLevel: +inputObj["tempo-increase"],
    excerptId: Date.now(),
    progress: {
      currTempo: +inputObj["starting-tempo"],
      totalLevels: +setTotalLevels(
        inputObj["starting-tempo"],
        inputObj["goal-tempo"],
        inputObj["tempo-increase"]
      ),
      currLevel: +1,
      progressPercent: +0,
      progHistory: [[0, new Date()]],
      //progHistory is init at lvl 0, keeps record of time each level was passed
    },
  };
};

const setTotalLevels = function (start, end, inc) {
  return Math.ceil((end - start) / inc);
};

//Pass in Piece Object
export const incNextLevel = function (pcObj) {
  let {
    currTempo: currT,
    currLevel: currLvl,
    progressPercent: progPerc,
    totalLevels: lvls,
    progHistory: progHis,
  } = pcObj.progress;
  console.log(currT, currLvl, progPerc, lvls);

  //Update Progress percent before next level is inc
  progPerc = Math.ceil((currLvl / lvls) * 100);
  progHis.push([currLvl, new Date()]);
  currLvl++;
  currT += pcObj.tempoIncreasePerLevel;

  //State is updated HERE:
  pcObj.progress = {
    currTempo: currT,
    currLevel: currLvl,
    progressPercent: progPerc,
    totalLevels: lvls,
    progHistory: progHis,
  };
  console.log(state.practiceList[0].progress);
};
