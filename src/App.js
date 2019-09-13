import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import logo from './logo.svg';
import './App.css';

//                0         1        2             3           4             5                 6          7              8            9        10         11       12       13       14               15 
const teams = ["Canada", "Russia", "Finland", "Sweden", "Czech Republic", "United States", "Germany", "Switzerland", "Slovakia", "Latvia", "Norway", "Denmark", "Belarus", "Italy", "Kazakhstan", "Great Britain"];

//                   0        1          2          3        4         5        6         7
const groups = [ [teams[0], teams[3], teams[4], teams[6], teams[8], teams[11], teams[12], teams[15]],
                  [teams[1], teams[2], teams[5], teams[7], teams[9], teams[10], teams[13], teams[14]] ];

var teamStatistics = [];

var  groupStageMatches = [ [{home: groups[0][0], away: groups[0][3], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][1], away: groups[0][2], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[0][3], away: groups[0][7], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][4], away: groups[0][5], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][6], away: groups[0][2], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[0][7], away: groups[0][4], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][0], away: groups[0][5], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][1], away: groups[0][6], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[0][2], away: groups[0][0], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][3], away: groups[0][1], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[0][7], away: groups[0][5], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][6], away: groups[0][4], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[0][2], away: groups[0][7], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][0], away: groups[0][6], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[0][5], away: groups[0][3], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][1], away: groups[0][4], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[0][3], away: groups[0][6], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][7], away: groups[0][0], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[0][5], away: groups[0][6], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][0], away: groups[0][1], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][4], away: groups[0][2], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[0][1], away: groups[0][7], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][3], away: groups[0][4], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[0][6], away: groups[0][7], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][2], away: groups[0][5], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[0][4], away: groups[0][0], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][2], away: groups[0][3], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[0][5], away: groups[0][1], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""}],

                              [{home: groups[1][1], away: groups[1][2], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][0], away: groups[1][3], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[1][6], away: groups[1][2], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][4], away: groups[1][5], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][3], away: groups[1][7], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[1][0], away: groups[1][5], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][7], away: groups[1][4], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][1], away: groups[1][6], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[1][2], away: groups[1][0], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][3], away: groups[1][1], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[1][7], away: groups[1][5], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][6], away: groups[1][4], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[1][2], away: groups[1][7], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][0], away: groups[1][6], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[1][5], away: groups[1][3], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][1], away: groups[1][4], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[1][7], away: groups[1][0], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][3], away: groups[1][6], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[1][4], away: groups[1][2], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][5], away: groups[1][6], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][0], away: groups[1][1], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[1][1], away: groups[1][7], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][3], away: groups[1][4], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[1][6], away: groups[1][7], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][2], away: groups[1][5], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},

                                {home: groups[1][4], away: groups[1][0], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][5], away: groups[1][1], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
                                {home: groups[1][2], away: groups[1][3], periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""}]];

var playoffs = { quarterfinals: [
  {home: "", away: "", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
  {home: "", away: "", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
  {home: "", away: "", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
  {home: "", away: "", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""}
], semifinals: [
  {home: "", away: "", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
  {home: "", away: "", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""}
], bronze: [
  {home: "", away: "", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
], final: [
  {home: "", away: "", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
]};

function getFlag(team)
{
  var url = "";
  switch (team)
  {
    case "Canada":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/35px-Flag_of_Canada_%28Pantone%29.svg.png";
      break;
    case "Russia":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/35px-Flag_of_Russia.svg.png";
      break;
    case "Finland":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/35px-Flag_of_Finland.svg.png";
      break;
    case "Sweden":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/35px-Flag_of_Sweden.svg.png";
      break;
    case "Czech Republic":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/35px-Flag_of_the_Czech_Republic.svg.png";
      break;
    case "United States":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png";
      break;
    case "Germany":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/35px-Flag_of_Germany.svg.png";
      break;
    case "Switzerland":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/24px-Flag_of_Switzerland.svg.png";
      break;
    case "Slovakia":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/35px-Flag_of_Slovakia.svg.png";
      break;
    case "Latvia":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/35px-Flag_of_Latvia.svg.png";
      break;
    case "Norway":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/32px-Flag_of_Norway.svg.png";
      break;
    case "Denmark":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/31px-Flag_of_Denmark.svg.png";
      break;
    case "Belarus":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/35px-Flag_of_Belarus.svg.png";
      break;
    case "Italy":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/35px-Flag_of_Italy.svg.png";
      break;
    case "Kazakhstan":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/35px-Flag_of_Kazakhstan.svg.png";
      break;
    case "Great Britain":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/35px-Flag_of_the_United_Kingdom.svg.png";
      break;
  }
  return (<img src={url} alt={team}/>);
}

function getTeamRanking(team)
{
  return teams.indexOf(team) + 1;
}

//One conflict is either a regulation period, overtime period or a penalty shot.
function playConflict(homeTeam, awayTeam, tieLimit = 3)
{
  var homeResult = 0;
  var awayResult = 0;

  //The higher ranked team rolls a D16, and the lower ranked team rolls a D20.
  //Their rank (IIHF ranking truncated to 16) is subtracted from their roll to find
  //their performance in the period.
  if (getTeamRanking(homeTeam) > getTeamRanking(awayTeam))
  {
    homeResult = (Math.floor(Math.random()*20))+1 - getTeamRanking(homeTeam);
    awayResult = (Math.floor(Math.random()*16))+1 - getTeamRanking(awayTeam);
  }
  else
  {
    homeResult = (Math.floor(Math.random()*16))+1 - getTeamRanking(homeTeam);
    awayResult = (Math.floor(Math.random()*20))+1 - getTeamRanking(awayTeam);
  }

  //If the team performance <= tieLimit, the period is declared a tie. This is a little artificial
  //but without it, ties would be unrealistically rare.
  if (Math.abs(homeResult - awayResult) <= tieLimit)
  {
    homeResult = 0;
    awayResult = 0;
  }

  return {home: homeResult, away: awayResult};
}

function playPenaltyShootout(homeTeam, awayTeam)
{
  var result;
  var homeTeamGoals = 0;
  var awayTeamGoals = 0;

  //First we do the regular five pairs of shoots.
  for (var i = 0; i < 5; i++)
  {
    //Each attempt is played separately, so there's a conflict for one team attacking and another conflict for the other
    //team attacking.
    result = { homeAttacks: playConflict(homeTeam, awayTeam, 0), awayAttacks: playConflict(homeTeam, awayTeam, 0) };
    //If the attacker rolls a higher performance than the defender, the attacker wins the attempt and gets a score.
    //If the defender rolls a higher performance than the attacker, nothing happens.
    //If they roll equal performance, the tie is broken in favor of the higher ranked team.
    if (result.homeAttacks.home > result.homeAttacks.away)
    {
      homeTeamGoals++;
    }
    if (result.homeAttacks.home == result.homeAttacks.away && getTeamRanking(homeTeam) > getTeamRanking(awayTeam))
    {
      homeTeamGoals++;
    }
    if (result.awayAttacks.home > result.awayAttacks.away)
    {
      awayTeamGoals++;
    }
    if (result.awayAttacks.home == result.awayAttacks.away && getTeamRanking(awayTeam) > getTeamRanking(homeTeam))
    {
      awayTeamGoals++;
    }
  }
  //TODO: (low priority) Make it so that the regular five shootout pairs cut short if one of the teams makes so
  //many goals that the other team can't win in any case.
  
  //If the situation is still even, play individual shoot pairs until it's no longer equal.
  if (homeTeamGoals == awayTeamGoals)
  {
    do
    {
      //TODO: Make the penalty shot pairs into one function to call within this loop and the previous loop.
      result = { homeAttacks: playConflict(homeTeam, awayTeam, 0), awayAttacks: playConflict(homeTeam, awayTeam, 0) };
      if (result.homeAttacks.home > result.homeAttacks.away)
      {
        homeTeamGoals++;
      }
      if (result.homeAttacks.home == result.homeAttacks.away && getTeamRanking(homeTeam) > getTeamRanking(awayTeam))
      {
        homeTeamGoals++;
      }
      if (result.awayAttacks.home > result.awayAttacks.away)
      {
        awayTeamGoals++;
      }
      if (result.awayAttacks.home == result.awayAttacks.away && getTeamRanking(awayTeam) > getTeamRanking(homeTeam))
      {
        awayTeamGoals++;
      }
    } while (homeTeamGoals == awayTeamGoals);
  }

  if (homeTeamGoals > awayTeamGoals)
  {
    return homeTeam;
  }
  else
  {
    return awayTeam;
  }
}

function findGroup(oneTeam, otherTeam)
{
  var group = { group: 0, match: 0 };
  //Find the queried game from one of the group schedules.
  //As a result, "group" is the group of the game, and "i" is the key.
  for (var match = 0; match < groupStageMatches[0].length; match++)
  {
    if ((groupStageMatches[0][match].home == oneTeam || groupStageMatches[0][match].away == oneTeam) && 
        (groupStageMatches[0][match].home == otherTeam || groupStageMatches[0][match].away == otherTeam))
    {
      group.group = 0;
      break;
    }
    if ((groupStageMatches[1][match].home == oneTeam || groupStageMatches[1][match].away == oneTeam) && 
        (groupStageMatches[1][match].home == otherTeam || groupStageMatches[1][match].away == otherTeam))
    {
      group.group = 1;
      break;
    }
  }
  group.match = match;
  return group;
}

function getPeriodsTotal(homeTeam, awayTeam)
{
  var periodsScore = { home: 0, away: 0};
  var group = findGroup(homeTeam, awayTeam);
  for (var period = 0; period < groupStageMatches[group.group][group.match].periods.length; period++)
  {
    if (groupStageMatches[group.group][group.match].periods[period].home > groupStageMatches[group.group][group.match].periods[period].away)
    {
      periodsScore.home++;
    }
    else if (groupStageMatches[group.group][group.match].periods[period].away > groupStageMatches[group.group][group.match].periods[period].home)
    {
      periodsScore.away++;
    }
  }
  return periodsScore;
}

function playGroupMatch(oneTeam, otherTeam)
{

  var group = findGroup(oneTeam, otherTeam);
  var homeTeam = "";
  var awayTeam = "";
  var finalScore = {home: 0, away: 0, winner: "", stage: "regulation"};

  //If the game hasn't been played yet, play it now.
  //Here we only play the regulation, which may end in a tie.
  if (groupStageMatches[group.group][group.match].home == oneTeam)
  {
    homeTeam = oneTeam;
    awayTeam = otherTeam;
  }
  else 
  {
    homeTeam = otherTeam;
    awayTeam = oneTeam;
  }
  groupStageMatches[group.group][group.match].periods[0] = playConflict(homeTeam, awayTeam);
  groupStageMatches[group.group][group.match].periods[1] = playConflict(homeTeam, awayTeam);
  groupStageMatches[group.group][group.match].periods[2] = playConflict(homeTeam, awayTeam);

  //Count the final score of the game.
  var periodsScore = getPeriodsTotal(homeTeam, awayTeam);
  finalScore.home = periodsScore.home;
  finalScore.away = periodsScore.away;

  //If the game is a tie, play an extra overtime period.
  if (finalScore.home == finalScore.away)
  {
    var overtime = playConflict(homeTeam, awayTeam);
    groupStageMatches[group.group][group.match].periods.push(overtime);
    if (overtime.home > overtime.away)
    {
      finalScore.home++;
    }
    else if (overtime.home < overtime.away)
    {
      finalScore.away++;
    }
    finalScore.stage = "overtime";
  }

  //If the game is still a tie, play the penalty shootout.
  if (finalScore.home == finalScore.away && groupStageMatches[group.group][group.match].periods.length == 4)
  {
    if (groupStageMatches[group.group][group.match].shootout == "")
    {
      groupStageMatches[group.group][group.match].shootout = playPenaltyShootout(homeTeam, awayTeam);
    }
    if (groupStageMatches[group.group][group.match].shootout == homeTeam)
    {
      finalScore.home++;
    }
    else
    {
      finalScore.away++;
    }
    finalScore.stage = "shootout";
  }
//console.log(groupStageMatches[group.group][group.match]);

  //There should be no tie at this point in any way, so now we declare a winner.
  if (finalScore.home > finalScore.away)
  {
    finalScore.winner = homeTeam;
  }
  else if (finalScore.home < finalScore.away)
  {
    finalScore.winner = awayTeam;
  }
  else
  {
    finalScore.winner = "=";
  }

  return finalScore;
}

function getGroupMatchResults(oneTeam, otherTeam)
{
  var finalScore = {home: 0, away: 0, winner: "", stage: "regulation"};
  var group = findGroup(oneTeam, otherTeam);

  var homeTeam = groupStageMatches[group.group][group.match].home;
  var awayTeam = groupStageMatches[group.group][group.match].away;

  var periodsScore = getPeriodsTotal(homeTeam, awayTeam);

  finalScore.home = periodsScore.home;
  finalScore.away = periodsScore.away;

  if (finalScore.home > finalScore.away)
  {
    finalScore.winner = homeTeam;
  }
  else if (finalScore.home < finalScore.away)
  {
    finalScore.winner = awayTeam;
  }

  if (groupStageMatches[group.group][group.match].periods.length != 3)
  {
    if (groupStageMatches[group.group][group.match].shootout == "")
    {
      finalScore.stage = "overtime";
    }
    else
    {
      finalScore.winner = groupStageMatches[group.group][group.match].shootout;
      if (finalScore.winner == homeTeam)
      {
        finalScore.home++;
      }
      else
      {
        finalScore.away++;
      }
      finalScore.stage = "shootout";
    }
  }

  return finalScore;
}
/*function checkGroupGameWinner(gameStatistics)
{

}*/
/* console.log(playGroupMatch("Belarus", "Slovakia"));
console.log(playGroupMatch("Czech Republic", "Belarus")); */

function playGroupStage()
{
  for (var group = 0; group < 2; group++)
  {
    for (var match = 0; match < groupStageMatches[group].length; match++)
    {
      playGroupMatch(groupStageMatches[group][match].home, groupStageMatches[group][match].away);
    }
  }
}

function groupPhaseStatistics()
{
  function groupTable(group)
  {
    //Separate the statistics for each group from the combined team statistics.
    var teamStatisticsPerGroup = [];
    groups[group].forEach(function(team)
    {
      teamStatisticsPerGroup.push(teamStatistics[getTeamRanking(team) - 1]);
    });

    //Order the teams based on points. If two teams have the same number of points, they are
    //ordered based on the match between the teams.

    var madeChange;
    var temp;
    do
    {
      madeChange = false;
      for (var team = 0; team < teamStatisticsPerGroup.length - 1; team++)
      {
        if (teamStatisticsPerGroup[team].points < teamStatisticsPerGroup[team+1].points)
        {
          temp = teamStatisticsPerGroup[team];
          teamStatisticsPerGroup[team] = teamStatisticsPerGroup[team+1];
          teamStatisticsPerGroup[team+1] = temp;
          madeChange = true;
        }
      }
    } while (madeChange == true);
    
    var counter= 0;
    do
    {
      counter++;
      madeChange = false;
      for (team = 0; team < teamStatisticsPerGroup.length -1; team++)
      {
        if (teamStatisticsPerGroup[team].points == teamStatisticsPerGroup[team+1].points)
        {
          var headToHead = getGroupMatchResults(teamStatisticsPerGroup[team].teamName, teamStatisticsPerGroup[team+1].teamName);
          if (headToHead.winner == teamStatisticsPerGroup[team+1].teamName)
          {
            temp = teamStatisticsPerGroup[team];
            teamStatisticsPerGroup[team] = teamStatisticsPerGroup[team+1];
            teamStatisticsPerGroup[team+1] = temp;
            madeChange = true;
            //continue;
          }
        }
      }
    } while(madeChange == true && counter < 100);

    //Advance top four teams of a group to playoffs.
    if (group == 0)
    {
      playoffs.quarterfinals[0].home = teamStatisticsPerGroup[0].teamName;
      playoffs.quarterfinals[1].away = teamStatisticsPerGroup[2].teamName;
      playoffs.quarterfinals[2].away = teamStatisticsPerGroup[3].teamName;
      playoffs.quarterfinals[3].home = teamStatisticsPerGroup[1].teamName;
    }
    else
    {
      playoffs.quarterfinals[0].away = teamStatisticsPerGroup[3].teamName;
      playoffs.quarterfinals[1].home = teamStatisticsPerGroup[1].teamName;
      playoffs.quarterfinals[2].home = teamStatisticsPerGroup[0].teamName;
      playoffs.quarterfinals[3].away = teamStatisticsPerGroup[2].teamName;
      console.log(playoffs);
    }

    //Turn them into a table.
    return(
      <ReactTable
        showPagination={false}
        data={teamStatisticsPerGroup}
        defaultPageSize={8}
        /* defaultSorted={[
          {
            id: "points",
            desc: true
          }
        ]} */
        columns={[
          {
            Header: "Group Statistics",
            columns: [
              {
                Header: "Team",
                accessor: "teamName"
              },
              {
                Header: "Pld.",
                accessor: "played"
              },
              {
                Header: "Wins",
                accessor: "wins"
              },
              {
                Header: "OTW",
                accessor: "overtimeWins"
              },
              {
                Header: "OTL",
                accessor: "overtimeLosses"
              },
              {
                Header: "Losses",
                accessor: "losses",
              },
              {
                Header: "PF",
                accessor: "periodsFor"
              },
              {
                Header: "PT",
                accessor: "periodsTied"
              },
              {
                Header: "PA",
                accessor: "periodsAgainst"
              },
              {
                Header: "Pts.",
                accessor: "points"
              }
            ]
          }
        ]}
      ></ReactTable>
    )
  }
  teams.forEach(function(team)
  {
    teamStatistics[getTeamRanking(team) - 1] = { teamName: team, played: 0, wins: 0, overtimeWins: 0, overtimeLosses: 0, losses: 0, periodsFor: 0, periodsTied: 0, periodsAgainst: 0, points: 0 };
  });

  var matchStatistics = [[], []];
  var stage;
  for (var group = 0; group < 2; group++)
  {
    for (var match = 0; match < groupStageMatches[group].length; match++)
    {
      var homeTeam = groupStageMatches[group][match].home;
      var awayTeam = groupStageMatches[group][match].away;
      var result = getGroupMatchResults(homeTeam, awayTeam);
      
      teamStatistics[getTeamRanking(homeTeam) - 1].played += 1;
      teamStatistics[getTeamRanking(awayTeam) - 1].played += 1;
      if (result.winner == homeTeam)
      {
        if (result.stage == "regulation")
        {
          teamStatistics[getTeamRanking(homeTeam) - 1].wins++;
          teamStatistics[getTeamRanking(awayTeam) - 1].losses++;
          teamStatistics[getTeamRanking(homeTeam) - 1].points += 3;
        }
        else
        {
          teamStatistics[getTeamRanking(homeTeam) - 1].overtimeWins++;
          teamStatistics[getTeamRanking(awayTeam) - 1].overtimeLosses++;
          teamStatistics[getTeamRanking(homeTeam) - 1].points += 2;
          teamStatistics[getTeamRanking(awayTeam) - 1].points += 1;
        }
      }
      else
      {
        if (result.stage == "regulation")
        {
          teamStatistics[getTeamRanking(awayTeam) - 1].wins++;
          teamStatistics[getTeamRanking(homeTeam) - 1].losses++;
          teamStatistics[getTeamRanking(awayTeam) - 1].points += 3;
        }
        else
        {
          teamStatistics[getTeamRanking(awayTeam) - 1].overtimeWins++;
          teamStatistics[getTeamRanking(homeTeam) - 1].overtimeLosses++;
          teamStatistics[getTeamRanking(awayTeam) - 1].points += 2;
          teamStatistics[getTeamRanking(homeTeam) - 1].points += 1;
        }
      }

      teamStatistics[getTeamRanking(homeTeam) - 1].periodsFor += result.home;
      teamStatistics[getTeamRanking(homeTeam) - 1].periodsAgainst += result.away;
      teamStatistics[getTeamRanking(homeTeam) - 1].periodsTied += 3 - (result.home + result.away);
      teamStatistics[getTeamRanking(awayTeam) - 1].periodsFor += result.away;
      teamStatistics[getTeamRanking(awayTeam) - 1].periodsAgainst += result.home;
      teamStatistics[getTeamRanking(awayTeam) - 1].periodsTied += 3 - (result.home + result.away)

      switch (result.stage)
      {
        case "shootout":
          stage = <small>GWS</small>;
          break;
        case "overtime":
          stage = <small>OT</small>;
          break;
        default:
          stage = <small></small>;
          break;
      }
      matchStatistics[group].push(
        <tr className="groupStageMatch" key={match}>
          <td className="home">
            {homeTeam}
            {getFlag(homeTeam)}
          </td>
          <td className="groupMatchResult">{result.home} - {result.away} {stage}</td>
          <td className="away">
            {getFlag(awayTeam)}
            {awayTeam}
          </td>
        </tr>);
    }
  }
  //console.log(teamStatistics);
  return (
    <div className="groupPhase">
      <h2>Group Phase</h2>
      <div className="groupA">
        <h3>Group A</h3>
        {groupTable(0)}
        <table>
          <tbody>
          {matchStatistics[0]}
          </tbody>
        </table>
      </div>
      <div className="groupB">
        <h3>Group B</h3>
        {groupTable(1)}
        <table>
          <tbody>
          {matchStatistics[1]}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function playoffStatistics()
{
  return (
    <div className="playoffs">
      <h2>Playoffs</h2>
      <table className="playoffsBracket">
        <thead>
          <tr><th colSpan="2" className="playoffsBracketHeader">QuarterFinals</th><th className="playoffsBracketLine"></th><th className="playoffsBracketLine"></th><th colSpan="2" className="playoffsBracketHeader">Semifinals</th><th className="playoffsBracketLine"></th><th className="playoffsBracketLine"></th><th colSpan="2" className="playoffsBracketHeader">Final</th></tr>
        </thead>
        <tbody>
          <tr>
            <td className="playoffsBracketHome">QF1 home</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineBottom"></td><td className="playoffsBracketLine"></td>
            <td colSpan="6"></td>
          </tr>
          <tr>
            <td className="playoffsBracketAway">QF1 away</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineTop playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="6"></td>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineBottom"></td>
            <td className="playoffsBracketHome">SF1 home</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineBottom"></td><td className="playoffsBracketLine"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineTop"></td>
            <td className="playoffsBracketAway">SF1 away</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineRight playoffsBracketLineTop"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td className="playoffsBracketHome">QF2 home</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineBottom playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td className="playoffsBracketAway">QF2 away</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineTop"></td><td className="playoffsBracketLine"></td>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td colSpan="6"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineBottom"></td>
            <td className="playoffsBracketHome">FIN home</td>
            <td className="playoffsBracketScore">x</td>
          </tr>
          <tr>
            <td colSpan="6"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineTop"></td>
            <td className="playoffsBracketAway">FIN away</td>
            <td className="playoffsBracketScore">x</td>
          </tr>
          <tr>
            <td className="playoffsBracketAway">QF3 home</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineBottom"></td><td className="playoffsBracketLine"></td>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td className="playoffsBracketHome">QF3 away</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineTop playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineBottom"></td>
            <td className="playoffsBracketAway">SF2 home</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineRight playoffsBracketLineBottom"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineTop"></td>
            <td className="playoffsBracketHome">SF2 away</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineTop"></td><td className="playoffsBracketLine"></td>
            <th colSpan="2" className="playoffsBracketHeader">Bronze game</th>
          </tr>
          <tr>
            <td className="playoffsBracketAway">QF4 home</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineBottom playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="4"></td>
            <td className="playoffsBracketHome">BRZ home</td>
            <td className="playoffsBracketScore">x</td>
          </tr>
          <tr>
            <td className="playoffsBracketHome">QF4 away</td><td className="playoffsBracketScore">x</td>
            <td className="playoffsBracketLine playoffsBracketLineTop"></td><td className="playoffsBracketLine"></td>
            <td colSpan="4"></td>
            <td className="playoffsBracketAway">BRZ away</td>
            <td className="playoffsBracketScore">x</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function App() {

  playGroupStage();
  return (
    <div className="App">
      {groupPhaseStatistics()}
      {playoffStatistics()}
    </div>
  );
}

export default App;