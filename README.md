# nextjs-output-with-api-openapi

Open API を用いたスキーマ駆動開発を取り入れた Web サービス

## 技術構成

### フロントエンド

- typescript: 4.8.4
- react: 18.2.0
- react-dom: 18.2.0
- next: 12.3.1
- @fortawesome/react-fontawesom: 0.2.0
- @fortawesome/free-solid-svg-icons: 6.2.0
- @openapitools

### バックエンド

- nestjs: 9.0.0
- prisma: 4.4.0
- typescript: 4.3.5
- bcrypt: 5.1.0
- passport-jwt: 4.0.0
- swagger-ui-express: 4.5.0

### その他

- docker
- MySQL: 8.0

<br />

## 仕様

- 認証機能

  - ログイン
  - 会員登録
  - ログアウト

- Todo リスト
  - 一覧表示
  - 検索処理
  - 新規登録処理
  - 詳細表示
  - 編集処理
  - 削除処理

<br />

## 環境構築

### 1. docker image を作成

```
docker-compose build
```

### 2. コンテナを起動

```
// フロントエンド、バックエンド、DBのコンテナを起動する
docker-compose up -d
```

注: 初回起動時は node_modules を install しているので時間がかかる
バックエンド、フロントエンドが起動できたかどうかは、以下のコマンドでログを確認

```
docker-compose logs
```

### 3. マイグレーション、シーディング (テーブル、データ作成)

以下のコマンドを実行

```
make db-setup
```

### 4. ブラウザに表示

```
url: http://localhost
```

注: Todo のデータが表示されない場合は、少し待ってからリロードすること
バックエンドのアプリケーションの立ち上げに少し時間がかかるため

<br />

## 起動確認

### 1. ログインを実行

ログイン画面 (http://localhost)で以下のメールアドレス、パスワードを入力してログインできることを確認。
正常であれば、Todo 一覧画面にリダイレクトする

email: sample1@test.com

password: password

<br />

## API 仕様書表示

OPEN API を使った API 仕様書

Open API について

- https://swagger.io/docs/specification/about/
- https://www.alpha.co.jp/blog/202208_02

バックエンド API の仕様書をブラウザに表示する

(これがあるとバックエンドのコードを見なくても API の仕様を確認することができるので、フロントエンドの開発効率が上がる)

```
cd open-api

docker-compose up -d
```

以下の url で API 仕様書を表示

http://localhost:8000

<br />

## Open API generator によるフロントエンドコードの自動生成

Open API の定義をもとに、コードを自動生成する

フロントエンドの API 通信処理のロジックや API のリクエストとレスポンスの型定義も自動生成できる

Open API generator について

- https://github.com/OpenAPITools/openapi-generator

### 方法

- フロントエンドのディレクトリに移動し、以下のコマンドを実行

```
cd web-front

// open api generator起動
npm run generate-client
```

- 以下のディレクトリ直下に API 接続処理及び API の型定義が自動生成される

```
web-front/src/types/typescript-axios
```

#### Open API generator の仕組み説明

`npm run generate-client` コマンドの内容は以下にようになっている

web-front/src/package.json

```
"scripts": {
  ・・・
   "generate-client": "openapi-generator-cli generate -g typescript-axios -i ../api-server/openapi/openapi-spec.yaml -o ./src/types/typescript-axios"
},
```

以下のように OpenAPI の yaml ファイルを元に自動生成し、その生成したコードをコマンドに示したディレクトリにセットする内容になっている。

```
openapi-generator-cli generate -g typescript-axios -i [OpenAPIのymlファイルがあるパス] -o [自動生成したコードをセットするディレクトリのパス]
```

<br />

## 補足

### DB のデータを初期化したい場合

prisma は migration のロールバック機能がないため、コンテナのボリュームを削除するしかない。
コンテナが起動している状態で、以下のコマンドを実行してボリュームを削除する

```
docker-compose down -v
```

### コンテナのログを確認したい場合

フロントエンド、バックエンド、DB コンテナのログを確認する方法

### 1. コンテナ ID を確認

コンテナを起動している状態で、以下のコマンドでコンテナ ID(CONTAINER ID)を確認する。

```
docker ps
```

各イメージに対応する コンテナ ID を確認

- バックエンド: nestjs_output_with_openapi_backend
- フロントエンド: nestjs_output_with_openapi_frontend
- DB: mysql:8.0

以下のコマンドで各コンテナのログを確認

```
docker logs [コンテナID]
```
