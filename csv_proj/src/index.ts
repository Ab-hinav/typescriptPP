
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReaderBack";
import { MatchReader } from "./MatchReader";



// const reader = new MatchReader('football.csv');
// reader.read();

const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();

let manUnitedWins = 0;

for (let match of reader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(manUnitedWins);