# 菊地工業 ホームページ

菊地工業の公式ホームページ用リポジトリです。

集客 / 会社の魅力 / 工事内容の紹介などを目的としたコーポレートサイトを今後 Cursor 上で開発し、Vercel にデプロイして公開する予定です。

---

## 現状

- リポジトリの初期セットアップのみ完了
- フレームワーク (Next.js / Astro / 静的HTML 等) は未選定
- 中身のページはこれから作成

## 開発の流れ (予定)

1. フレームワーク選定 (Vercel と相性が良い Next.js を推奨)
2. ページ構成設計
   - トップ
   - 会社概要
   - 事業内容 / 工事実績
   - お問い合わせ
3. デザイン実装
4. Vercel に接続して公開
5. 独自ドメイン設定

---

## Vercel 連携手順 (将来作業用メモ)

### 1. Vercel アカウントを GitHub と紐付け

1. [https://vercel.com](https://vercel.com) にアクセス
2. 「Continue with GitHub」でサインアップ / ログイン
3. GitHub の連携で `ANC-takagi/-HP` リポジトリへのアクセスを許可

### 2. プロジェクトをインポート

1. Vercel ダッシュボードの「Add New」→「Project」
2. `ANC-takagi/-HP` を選択して「Import」
3. フレームワークは自動検出 (Next.js などの場合は自動設定)
4. 「Deploy」ボタンを押すと初回デプロイが走り `*.vercel.app` の URL が発行される

### 3. 独自ドメイン設定

1. Vercel プロジェクトの「Settings」→「Domains」
2. 取得済み独自ドメインを入力して「Add」
3. ドメインレジストラ側で Vercel 指定の DNS レコード (A レコード or CNAME) を設定
4. SSL 証明書は Vercel が自動発行

### 4. 自動デプロイ

- `main` ブランチに push すると本番環境に自動デプロイ
- それ以外のブランチに push するとプレビュー環境が自動生成 (URL がコメントで通知される)

---

## ローカル開発 (フレームワーク導入後)

フレームワークを導入したら以下に手順を追記予定。

```bash
# 例) Next.js の場合
npm install
npm run dev
```

---

## リポジトリ情報

- GitHub: [ANC-takagi/-HP](https://github.com/ANC-takagi/-HP)
- 主ブランチ: `main`
- デプロイ先: Vercel (予定)
