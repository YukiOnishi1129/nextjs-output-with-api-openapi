# nextjs-output-with-api-openapi

## 技術構成

### フロントエンド

- typescript: 4.8.4
- react: 18.2.0
- react-dom: 18.2.0
- next: 12.3.1
- @fortawesome/react-fontawesom: 0.2.0
- @fortawesome/free-solid-svg-icons: 6.2.0

### バックエンド

- nestjs: 9.0.0
- prisma: 4.4.0
- typescript: 4.3.5
- bcrypt: 5.1.0
- passport-jwt: 4.0.0

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
