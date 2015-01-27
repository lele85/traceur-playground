var traceur = require("traceur");
// traceur.require("Hello.js").Hello();
var options = new traceur.util.Options();
options.outputLanguage = "es6";
var errorReporter = {
	reportError : function (pos, mess) {
		console.log(mess);
	}
};

var sourceFile = new traceur.syntax.SourceFile('Hello.js', require('fs').readFileSync("Hello.js").toString());
var parser = new traceur.syntax.Parser(sourceFile, errorReporter, options);
var tree = parser.parseModule();
tree.scriptItemList[0].declaration.declarations.declarationType = 'const';

var compiled = traceur.outputgeneration.TreeWriter.write(tree);
console.log(compiled);