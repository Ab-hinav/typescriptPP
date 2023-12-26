"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzer/WinsAnalysis");
const HtmlReports_1 = require("./reportTargets/HtmlReports");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        this.outputTarget.print(this.analyzer.run(matches));
    }
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReports_1.HtmlReport());
    }
}
exports.Summary = Summary;
