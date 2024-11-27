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
- prisma: 5.22.0
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

ログイン画面 (http://localhost) で以下のメールアドレス、パスワードを入力してログインできることを確認。
正常であれば、Todo 一覧画面にリダイレクトする

email: sample1@test.com

password: password

<br />

## Open APIについて
- https://swagger.io/docs/specification/about/
- https://www.alpha.co.jp/blog/202208_02

### API仕様書の確認方法
- https://github.com/YukiOnishi1129/nextjs-output-with-api-openapi/wiki/API%E4%BB%95%E6%A7%98%E6%9B%B8%E3%81%AE%E7%A2%BA%E8%AA%8D%E6%96%B9%E6%B3%95

### ダミーAPIの環境構築
- https://github.com/YukiOnishi1129/nextjs-output-with-api-openapi/wiki/%E3%83%80%E3%83%9F%E3%83%BCAPI%E3%81%AE%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89

### フロントエンドコードの自動生成について
- https://github.com/YukiOnishi1129/nextjs-output-with-api-openapi/wiki/%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E8%87%AA%E5%8B%95%E7%94%9F%E6%88%90%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6


<br />

## 補足

### DB関連の情報
- 以下の情報を元に「sequel ace」などを用いてDBコンテナにアクセスすれば、DBのデータの状態を確認できる

````
DBMS: mysql: 8.0
host: 127.0.0.1
database: NEXTJS_OUTPUT_WITH_OPENAPI_DB
user: user
password: pass
port: 3306
````

- sequel aceについて
- https://qiita.com/ucan-lab/items/b1304eee2157dbef7774

### DB のデータを初期化したい場合

prisma は migration のロールバック機能がないため、コンテナのボリュームを削除するしかない。
コンテナが起動している状態で、以下のコマンドを実行してボリュームを削除する

```
docker-compose down -v
```

### コンテナのログを確認したい場合

フロントエンド、バックエンド、DB コンテナのログを確認する方法

1. コンテナ ID を確認

コンテナを起動している状態で、以下のコマンドでコンテナ ID(CONTAINER ID)を確認する。

```
docker ps
```

各イメージに対応する コンテナ ID を確認

- バックエンド: nestjs_output_with_openapi_backend
- フロントエンド: nestjs_output_with_openapi_frontend
- DB: mysql:8.0

2. 以下のコマンドで各コンテナのログを確認

```
docker logs [コンテナID]
```
