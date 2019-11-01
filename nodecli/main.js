const program = require("commander");
const fs = require("fs");
const marked = require("marked");

program.usage("[options] mdfile")
program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
    gfm: false,
    ...program.opts(),
};

// ファイルを非同期で読み込む
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
    if (err) {
        console.error(err.message);
        // 終了ステータス 1（一般的なエラー）としてプロセスを終了する
        process.exit(1);
        return;
    }
    const html = marked(file, { gfm: cliOptions.gfm });
    console.log(html);
});