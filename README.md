# node.jsでaws cliコマンドを作成する

- 開発時のセキュリティ対策
  - Privateリポジトリで開発を開始した
  - CLIツールのため、aws個人アカウント(リソース)の情報をコード一切定義していない
  - git-secretsでチェック
  - apiキーは Mac端末のホーム配下を利用するため、このリポジトリ管理下にない
  - APIキーは開発で利用する毎に再生成し、開発中以外はIAMで保持しない

- 開発環境
  - Mac
  - node.js: v10.6.0
  - コマンドは `commander` を利用
    - `$ npm install commander`
  - aws-sdk-javascripti(node.js)
    - `$ npm install aws-sdk`

## コマンドオプション

### EC2
```
■ インスタンス一覧
 > $ node main ec2 --list

■ インスタンス起動
 > $ node main ec2 --start <instance-id-1>,<instance-id-2>...<instance-id-N>
 
■ インスタンス停止
 > $ node main ec2 --stop <instance-id-1>,<instance-id-2>...<instance-id-N> 
```

### AMI
```
■ AMI一覧取得
 > $ node main ami --list
```
