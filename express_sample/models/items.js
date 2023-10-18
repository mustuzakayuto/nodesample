// fs モジュールを読み込み
const fs = require("fs")

// data/items.jsonのパス指定
exports.filePath="./data/items.json"

// すべてのデータを取得するメソッド
exports.get = () =>{
    // 外部ファイルの読み込み
    var json = fs.readFileSync(this.filePath);
    // jsondataをパース(オブジェクトに変換)
    var values = JSON.parse(json);
    return values

}

// IDを指定してdataを取得するメソッド
exports.find= (id)=>{
    var values = this.get();

    return values.find((value) => value.id ==id)

}