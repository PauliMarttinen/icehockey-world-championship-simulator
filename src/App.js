import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './App.css';
//import { bigIntLiteral } from '@babel/types';

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
var playoffs = [
  {home: "QF1 home", away: "QF1 away", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
  {home: "QF2 home", away: "QF2 away", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
  {home: "QF3 home", away: "QF3 away", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
  {home: "QF4 home", away: "QF4 away", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
  {home: "SF1 home", away: "SF1 away", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
  {home: "SF2 home", away: "SF2 away", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
  {home: "BRZ home", away: "BRZ away", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""},
  {home: "FIN home", away: "FIN awat", periods: [{home: 0, away: 0}, {home: 0, away: 0}, {home: 0, away: 0}], shootout: ""}];

function getFlag(team)
{
  var url = "";
  var alt = "";
  switch (team)
  {
    case "Canada":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/35px-Flag_of_Canada_%28Pantone%29.svg.png";
      alt = "CAN";
      break;
    case "Russia":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/35px-Flag_of_Russia.svg.png";
      alt = "RUS";
      break;
    case "Finland":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/35px-Flag_of_Finland.svg.png";
      alt = "FIN";
      break;
    case "Sweden":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/35px-Flag_of_Sweden.svg.png";
      alt = "SWE";
      break;
    case "Czech Republic":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/35px-Flag_of_the_Czech_Republic.svg.png";
      alt = "CZE";
      break;
    case "United States":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png";
      alt = "USA";
      break;
    case "Germany":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/35px-Flag_of_Germany.svg.png";
      alt = "GER";
      break;
    case "Switzerland":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/24px-Flag_of_Switzerland.svg.png";
      alt = "SUI";
      break;
    case "Slovakia":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/35px-Flag_of_Slovakia.svg.png";
      alt = "SVK";
      break;
    case "Latvia":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/35px-Flag_of_Latvia.svg.png";
      alt = "LAT";
      break;
    case "Norway":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/32px-Flag_of_Norway.svg.png";
      alt = "NOR";
      break;
    case "Denmark":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/31px-Flag_of_Denmark.svg.png";
      alt = "DEN";
      break;
    case "Belarus":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/35px-Flag_of_Belarus.svg.png";
      alt = "BLR";
      break;
    case "Italy":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/35px-Flag_of_Italy.svg.png";
      alt = "ITA";
      break;
    case "Kazakhstan":
      url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/35px-Flag_of_Kazakhstan.svg.png";
      alt = "KAZ";
      break;
    case "Great Britain":
      url = "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/35px-Flag_of_the_United_Kingdom.svg.png";
      alt = "GBR";
      break;
  }
  return (<img src={url} alt={alt}/>);
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

  //The teams roll dice. Their rank (IIHF ranking truncated to 16) is subtracted from their roll to find
  //their performance in the conflict.
  if (getTeamRanking(homeTeam) > getTeamRanking(awayTeam))
  {
    //Hometeam is weaker, awayteam is stronger.
    homeResult = (Math.floor(Math.random()*18))+1 - getTeamRanking(homeTeam);
    awayResult = (Math.floor(Math.random()*20))+1 - getTeamRanking(awayTeam);
  }
  else
  {
    //Hometeam is stronger, awayteam is weaker.
    homeResult = (Math.floor(Math.random()*20))+1 - getTeamRanking(homeTeam);
    awayResult = (Math.floor(Math.random()*18))+1 - getTeamRanking(awayTeam);
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
    
    //If the attacker rolls a higher performance than the defender, the attacker scores a goal.
    //If the defender rolls a higher performance than the attacker, the defender saves.
    //If they roll equal performance, the tie is broken in favor of the stronger team.
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

//Find the queried game from one of the group schedules.
//As a result, "group" is the group of the game, and "match" is the number of the element in the array.
function findGroup(oneTeam, otherTeam)
{
  var group = { group: 0, match: 0 };

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

//Find the queried game from the playoff brackets.
//As a result, "match" is the number of the element in the array.
function findPlayoffBracket(oneTeam, otherTeam)
{
  for (var match = 0; match < playoffs.length; match++)
  {
    if ((playoffs[match].home == oneTeam || playoffs[match].away == oneTeam) &&
        (playoffs[match].home == otherTeam || playoffs[match].away == otherTeam))
    {
      return match;
    }
  }
}

//Count the total score from the periods of a match.
function getPeriodsTotal(periods)
{
  var periodsScore = {home: 0, away: 0};
  for (var period = 0; period < periods.length; period++)
  {
    if (periods[period].home > periods[period].away)
    {
      periodsScore.home++;
    }
    else if (periods[period].home < periods[period].away)
    {
      periodsScore.away++;
    }
  }
  return periodsScore;
}

//Play three periods in one swell swoop.
function playRegulationPeriods(oneTeam, otherTeam)
{
  return [playConflict(oneTeam, otherTeam), playConflict(oneTeam, otherTeam), playConflict(oneTeam, otherTeam)];
}

//Generate the result of a single match. The stage means whether it's in the group stage, playoffs or final.
function playMatch(oneTeam, otherTeam, stage)
{
  var group;
  if (stage == "group")
  {
    group = findGroup(oneTeam, otherTeam);
  }
  else
  {
    group = findPlayoffBracket(oneTeam, otherTeam);
  }
  var homeTeam = "";
  var awayTeam = "";
  var periodCount = 3;
  var finalScore = {home: 0, away: 0, winner: "", loser: "", stage: "regulation"};

  //If the game hasn't been played yet, play it now.
  //Here we only play the regulation, which may end in a tie.
    if (((stage == "group") ? groupStageMatches[group.group][group.match].home : playoffs[group].home) == oneTeam)
  {
    homeTeam = oneTeam;
    awayTeam = otherTeam;
  }
  else 
  {
    homeTeam = otherTeam;
    awayTeam = oneTeam;
  }
  
  if (stage == "group")
  {
    groupStageMatches[group.group][group.match].periods = playRegulationPeriods(homeTeam, awayTeam);
  }
  else
  {
    playoffs[group].periods = playRegulationPeriods(homeTeam, awayTeam);
  }

  //Count the final score of the game.
  var periodsScore = getPeriodsTotal((stage == "group") ? groupStageMatches[group.group][group.match].periods : playoffs[group].periods);
  finalScore.home = periodsScore.home;
  finalScore.away = periodsScore.away;

  //If the game is a tie, play an extra overtime period.
  //TODO: If "stage" is "final" (i.e. it's the final game), loop overtimes as long as someone wins, since
  //final games are no longer broken with a penalty shootout.
  if (finalScore.home == finalScore.away)
  {
    var overtime = playConflict(homeTeam, awayTeam);
    ((stage == "group") ? groupStageMatches[group.group][group.match].periods : playoffs[group].periods).push(overtime);
    if (overtime.home > overtime.away)
    {
      finalScore.home++;
    }
    else if (overtime.home < overtime.away)
    {
      finalScore.away++;
    }
    finalScore.stage = "overtime";
    periodCount++;
  }

  //If the game is still a tie, play the penalty shootout.
  if (finalScore.home == finalScore.away && periodCount == 4)
  {
    if (((stage == "group") ? groupStageMatches[group.group][group.match].shootout : playoffs[group].shootout) == "")
    {
      if (stage == "group")
      {
        groupStageMatches[group.group][group.match].shootout = playPenaltyShootout(homeTeam, awayTeam);
      }
      else
      {
        playoffs[group].shootout = playPenaltyShootout(homeTeam, awayTeam);
      }
    }
    if (((stage == "group") ? groupStageMatches[group.group][group.match].shootout : playoffs[group].shootout) == homeTeam)
    {
      finalScore.home++;
    }
    else
    {
      finalScore.away++;
    }
    finalScore.stage = "shootout";
  }

  //There should be no tie at this point in any way, so now we declare a winner.
  if (finalScore.home > finalScore.away)
  {
    finalScore.winner = homeTeam;
    finalScore.loser = awayTeam;
  }
  else if (finalScore.home < finalScore.away)
  {
    finalScore.winner = awayTeam;
    finalScore.loser = homeTeam;
  }
  else
  {
    finalScore.winner = "=";
  }

  return finalScore;
}

function getMatchResults(oneTeam, otherTeam, stage = "group")
{
  var finalScore = {home: 0, away: 0, winner: "", loser: "", stage: "regulation"};
  var group = (stage == "group") ? findGroup(oneTeam, otherTeam) : findPlayoffBracket(oneTeam, otherTeam);

  var homeTeam = (stage == "group") ? groupStageMatches[group.group][group.match].home : playoffs[group].home;
  var awayTeam = (stage == "group") ? groupStageMatches[group.group][group.match].away : playoffs[group].away;

  var periodsScore = getPeriodsTotal((stage == "group") ? groupStageMatches[group.group][group.match].periods : playoffs[group].periods);
  var periodsCount = ((stage == "group") ? groupStageMatches[group.group][group.match].periods : playoffs[group].periods).length;


  finalScore.home = periodsScore.home;
  finalScore.away = periodsScore.away;

  if (finalScore.home > finalScore.away)
  {
    finalScore.winner = homeTeam;
    finalScore.loser = awayTeam;
  }
  else if (finalScore.home < finalScore.away)
  {
    finalScore.winner = awayTeam;
    finalScore.loser = homeTeam;
  }
  if (periodsCount != 3)
  {
    if (((stage == "group") ? groupStageMatches[group.group][group.match].shootout : playoffs[group].shootout) == "")
    {
      finalScore.stage = "overtime";
    }
    else
    {
      finalScore.winner = (stage == "group") ? groupStageMatches[group.group][group.match].shootout : playoffs[group].shootout;
      if (finalScore.winner == homeTeam)
      {
        finalScore.home++;
        finalScore.loser = awayTeam;
      }
      else
      {
        finalScore.away++;
        finalScore.loser = homeTeam;
      }
      finalScore.stage = "shootout";
    }
  }
  return finalScore;
}

function playGroupStage()
{
  for (var group = 0; group < 2; group++)
  {
    for (var match = 0; match < groupStageMatches[group].length; match++)
    {
      playMatch(groupStageMatches[group][match].home, groupStageMatches[group][match].away, "group");
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

    //Order the teams based on points.
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
    
    //If two teams have the same points, they are ordered based on their match in the group phase.
    do
    {
      madeChange = false;
      for (team = 0; team < teamStatisticsPerGroup.length -1; team++)
      {
        if (teamStatisticsPerGroup[team].points == teamStatisticsPerGroup[team+1].points)
        {
          var headToHead = getMatchResults(teamStatisticsPerGroup[team].teamName, teamStatisticsPerGroup[team+1].teamName, "group");
          if (headToHead.winner == teamStatisticsPerGroup[team+1].teamName)
          {
            temp = teamStatisticsPerGroup[team];
            teamStatisticsPerGroup[team] = teamStatisticsPerGroup[team+1];
            teamStatisticsPerGroup[team+1] = temp;
            madeChange = true;
          }
        }
      }
    } while(madeChange == true);

    //Advance top four teams of a group to playoffs.
    if (group == 0)
    {
      playoffs[0].home = teamStatisticsPerGroup[0].teamName;
      playoffs[1].away = teamStatisticsPerGroup[2].teamName;
      playoffs[2].away = teamStatisticsPerGroup[3].teamName;
      playoffs[3].home = teamStatisticsPerGroup[1].teamName;
    }
    else
    {
      playoffs[0].away = teamStatisticsPerGroup[3].teamName;
      playoffs[1].home = teamStatisticsPerGroup[1].teamName;
      playoffs[2].home = teamStatisticsPerGroup[0].teamName;
      playoffs[3].away = teamStatisticsPerGroup[2].teamName;
    }

    //Turn them into a table.
    return(
      <ReactTable
        showPagination={false}
        data={teamStatisticsPerGroup}
        defaultPageSize={8}
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
      var result = getMatchResults(homeTeam, awayTeam, "group");
      
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

function playPlayoffs()
{
  for (var match = 0; match < 4; match++)
  {
    playMatch(playoffs[match].home, playoffs[match].away, "playoffs");
  }
  playoffs[4].home = getMatchResults(playoffs[0].home, playoffs[0].away, "playoffs").winner;
  playoffs[4].away = getMatchResults(playoffs[1].home, playoffs[1].away, "playoffs").winner;
  playoffs[5].home = getMatchResults(playoffs[2].home, playoffs[2].away, "playoffs").winner;
  playoffs[5].away = getMatchResults(playoffs[3].home, playoffs[3].away, "playoffs").winner;
  playMatch(playoffs[4].home, playoffs[4].away, "playoffs");
  playMatch(playoffs[5].home, playoffs[5].away, "playoffs");
  playoffs[6].home = getMatchResults(playoffs[4].home, playoffs[4].away, "playoffs").loser;
  playoffs[6].away = getMatchResults(playoffs[5].home, playoffs[5].away, "playoffs").loser;
  playoffs[7].home = getMatchResults(playoffs[4].home, playoffs[4].away, "playoffs").winner;
  playoffs[7].away = getMatchResults(playoffs[5].home, playoffs[5].away, "playoffs").winner;
  playMatch(playoffs[6].home, playoffs[6].away, "playoffs");
  playMatch(playoffs[7].home, playoffs[7].away, "final");
}

function playoffStatistics()
{
  playPlayoffs();

  var playoffWinStages = [];
  for (var match = 0; match < playoffs.length; match++)
  {
    if (playoffs[match].periods.length == 3)
    {
      playoffWinStages.push(<small></small>);
    }
    else if (playoffs[match].shootout == "")
    {
      playoffWinStages.push(<small>OT</small>);
    }
    else
    {
      playoffWinStages.push(<small>GWS</small>);
    }
  }

  //TODO: Only display win stage on the winner's row.
  return (
    <div className="playoffs">
      <h2>Playoffs</h2>
      <table className="playoffsBracket">
        <thead>
          <tr><th colSpan="2" className="playoffsBracketHeader">Quarterfinals</th><th className="playoffsBracketLine"></th><th className="playoffsBracketLine"></th><th colSpan="2" className="playoffsBracketHeader">Semifinals</th><th className="playoffsBracketLine"></th><th className="playoffsBracketLine"></th><th colSpan="2" className="playoffsBracketHeader">Final</th></tr>
        </thead>
        <tbody>
          <tr>
            <td className="playoffsBracketHome">{getFlag(playoffs[0].home)}{playoffs[0].home}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[0].home, playoffs[0].away, "playoffs").home} {playoffWinStages[0]}</td>
            <td className="playoffsBracketLine playoffsBracketLineBottom"></td><td className="playoffsBracketLine"></td>
            <td colSpan="6"></td>
          </tr>
          <tr>
            <td className="playoffsBracketAway">{getFlag(playoffs[0].away)}{playoffs[0].away}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[0].home, playoffs[0].away, "playoffs").away} {playoffWinStages[0]}</td>
            <td className="playoffsBracketLine playoffsBracketLineTop playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="6"></td>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineBottom"></td>
            <td className="playoffsBracketHome">{getFlag(playoffs[4].home)}{playoffs[4].home}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[4].home, playoffs[4].away, "playoffs").home} {playoffWinStages[4]}</td>
            <td className="playoffsBracketLine playoffsBracketLineBottom"></td><td className="playoffsBracketLine"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineTop"></td>
            <td className="playoffsBracketAway">{getFlag(playoffs[4].away)}{playoffs[4].away}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[4].home, playoffs[4].away, "playoffs").away} {playoffWinStages[4]}</td>
            <td className="playoffsBracketLine playoffsBracketLineRight playoffsBracketLineTop"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td className="playoffsBracketHome">{getFlag(playoffs[1].home)}{playoffs[1].home}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[1].home, playoffs[1].away, "playoffs").home} {playoffWinStages[1]}</td>
            <td className="playoffsBracketLine playoffsBracketLineBottom playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td className="playoffsBracketAway">{getFlag(playoffs[1].away)}{playoffs[1].away}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[1].home, playoffs[1].away, "playoffs").away} {playoffWinStages[1]}</td>
            <td className="playoffsBracketLine playoffsBracketLineTop"></td><td className="playoffsBracketLine"></td>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td colSpan="6"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineBottom"></td>
            <td className="playoffsBracketHome">{getFlag(playoffs[7].home)}{playoffs[7].home}</td>
            <td className="playoffsBracketScore">{getMatchResults(playoffs[7].home, playoffs[7].away, "playoffs").home} {playoffWinStages[7]}</td>
          </tr>
          <tr>
            <td colSpan="6"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineTop"></td>
            <td className="playoffsBracketAway">{getFlag(playoffs[7].away)}{playoffs[7].away}</td>
            <td className="playoffsBracketScore">{getMatchResults(playoffs[7].home, playoffs[7].away, "playoffs").away} {playoffWinStages[7]}</td>
          </tr>
          <tr>
            <td className="playoffsBracketAway">{getFlag(playoffs[2].home)}{playoffs[2].home}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[2].home, playoffs[2].away, "playoffs").home} {playoffWinStages[2]}</td>
            <td className="playoffsBracketLine playoffsBracketLineBottom"></td><td className="playoffsBracketLine"></td>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td className="playoffsBracketHome">{getFlag(playoffs[2].away)}{playoffs[2].away}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[2].home, playoffs[2].away, "playoffs").away} {playoffWinStages[2]}</td>
            <td className="playoffsBracketLine playoffsBracketLineTop playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineBottom"></td>
            <td className="playoffsBracketAway">{getFlag(playoffs[5].home)}{playoffs[5].home}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[5].home, playoffs[5].away, "playoffs").home} {playoffWinStages[5]}</td>
            <td className="playoffsBracketLine playoffsBracketLineRight playoffsBracketLineBottom"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <td className="playoffsBracketLine playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft playoffsBracketLineTop"></td>
            <td className="playoffsBracketHome">{getFlag(playoffs[5].away)}{playoffs[5].away}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[5].home, playoffs[5].away, "playoffs").away} {playoffWinStages[5]}</td>
            <td className="playoffsBracketLine playoffsBracketLineTop"></td><td className="playoffsBracketLine"></td>
            <th colSpan="2" className="playoffsBracketHeader">Bronze game</th>
          </tr>
          <tr>
            <td className="playoffsBracketAway">{getFlag(playoffs[3].home)}{playoffs[3].home}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[3].home, playoffs[3].away, "playoffs").home} {playoffWinStages[3]}</td>
            <td className="playoffsBracketLine playoffsBracketLineBottom playoffsBracketLineRight"></td><td className="playoffsBracketLine playoffsBracketLineLeft"></td>
            <td colSpan="4"></td>
            <td className="playoffsBracketHome">{getFlag(playoffs[6].home)}{playoffs[6].home}</td>
            <td className="playoffsBracketScore">{getMatchResults(playoffs[6].home, playoffs[6].away, "playoffs").home} {playoffWinStages[6]}</td>
          </tr>
          <tr>
            <td className="playoffsBracketHome">{getFlag(playoffs[3].away)}{playoffs[3].away}</td><td className="playoffsBracketScore">{getMatchResults(playoffs[3].home, playoffs[3].away, "playoffs").away} {playoffWinStages[3]}</td>
            <td className="playoffsBracketLine playoffsBracketLineTop"></td><td className="playoffsBracketLine"></td>
            <td colSpan="4"></td>
            <td className="playoffsBracketAway">{getFlag(playoffs[6].away)}{playoffs[6].away}</td>
            <td className="playoffsBracketScore">{getMatchResults(playoffs[6].home, playoffs[6].away, "playoffs").away} {playoffWinStages[6]}</td>
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