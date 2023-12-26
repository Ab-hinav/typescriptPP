"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const CsvFileReaderBack_1 = require("./CsvFileReaderBack");
const MatchReader_1 = require("./MatchReader");
// const reader = new MatchReader('football.csv');
// reader.read();
const reader = new MatchReader_1.MatchReader(new CsvFileReaderBack_1.CsvFileReader('football.csv'));
reader.load();
let manUnitedWins = 0;
for (let match of reader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
