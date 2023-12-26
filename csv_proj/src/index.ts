
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/Consolereports";
import { HtmlReport } from "./reportTargets/HtmlReports";

// const reader = new MatchReader('football.csv');
// reader.read();

const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();

// const summary = new Summary(new WinsAnalysis('Man United'),new ConsoleReport());
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(reader.matches);

