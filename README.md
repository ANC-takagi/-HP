# 株式会社菊地工業 ホームページ

熱絶縁工事(保温板金)を主業とする株式会社菊地工業のコーポレートサイトです。

- フレームワーク: **Next.js 15(App Router)** + TypeScript
- スタイリング: **Tailwind CSS**
- フォーム送信: **Resend**
- ホスティング想定: **Vercel**

---

## ページ構成(全6ページ)

| パス | ページ | 主な内容 |
|------|--------|---------|
| `/` | ホーム | ヒーロー、キャッチコピー、各ページへの導線 |
| `/about` | 会社案内 | 代表挨拶、会社概要、所在地マップ |
| `/services` | 事業内容 | 熱絶縁工事の解説、対応設備・エリア、施工の流れ、強み |
| `/works` | 施工事例 | 7枚の施工事例(カテゴリ絞り込み + 拡大モーダル) |
| `/recruit` | 採用情報 | 募集要項、福利厚生、応募導線 |
| `/contact` | お問い合わせ | 電話/メール案内 + Resendによるフォーム送信 |

---

## ローカル開発

### 1. Node.js のセットアップ

このプロジェクトは Node.js 20 以上を想定しています。インストール済みでない場合、ユーザーローカルにインストール済みです。

```bash
node -v   # v20 以上
npm -v
```

### 2. 依存パッケージのインストール

```bash
npm install
```

### 3. 環境変数の準備(任意・お問い合わせフォームを使う場合)

`.env.example` を `.env.local` にコピーし、Resend のAPIキーを設定します。

```bash
cp .env.example .env.local
```

`.env.local` の中身:

```dotenv
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=kikuchikogyo37@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

> **APIキー未設定でもサイト自体は動作します。** その場合フォーム送信時にエラーメッセージが表示され、メールは送られません。

### 4. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) で開けます。

### 5. ビルド確認

```bash
npm run build
npm start
```

---

## Resend(お問い合わせメール送信)の設定手順

1. [https://resend.com](https://resend.com) にアクセスし、無料アカウントを作成(GitHubアカウント連携可)
2. ログイン後、左メニュー「API Keys」→「Create API Key」でキーを発行
3. 発行されたキー(`re_...`)をコピー
4. ローカル開発時は `.env.local` の `RESEND_API_KEY` に貼り付け
5. Vercel 公開時は、Vercelの環境変数として設定(後述)

### 送信元アドレスについて

- 当面: `onboarding@resend.dev`(Resend提供のテスト用ドメイン、無料枠あり)
- 独自ドメイン取得後: Resend管理画面でドメイン認証 →`info@example.com` 等に変更可能

---

## Vercelデプロイ手順

### 初回設定

1. [https://vercel.com](https://vercel.com) にアクセス、GitHub連携でログイン
2. 「Add New」→「Project」→ `ANC-takagi/-HP` をImport
3. フレームワークは **Next.js** が自動検出される
4. **Environment Variables** セクションで以下を追加:
   - `RESEND_API_KEY` = `re_...`(Resendで発行したAPIキー)
   - `CONTACT_TO_EMAIL` = `kikuchikogyo37@gmail.com`
   - `CONTACT_FROM_EMAIL` = `onboarding@resend.dev`(独自ドメイン認証後は変更)
5. 「Deploy」をクリック → 数分で公開完了
6. 発行された `*.vercel.app` のURLでアクセス可能

### 自動デプロイ

- `main` ブランチに push すると本番環境が自動更新
- それ以外のブランチに push するとプレビュー環境が自動生成

### 独自ドメイン設定

1. Vercelプロジェクトの「Settings」→「Domains」
2. 取得済みドメインを入力し「Add」
3. ドメインレジストラ側で指示されたDNSレコード(A or CNAME)を設定
4. SSL証明書は Vercel が自動発行

---

## ディレクトリ構成

```
.
├── app/
│   ├── layout.tsx            # 共通レイアウト + メタデータ + JSON-LD
│   ├── page.tsx              # ホーム
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── works/page.tsx
│   ├── recruit/page.tsx
│   ├── contact/page.tsx
│   ├── api/contact/route.ts  # Resend経由のフォーム送信API
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Section.tsx
│   ├── ContactForm.tsx
│   └── WorksGallery.tsx
├── lib/
│   ├── company.ts            # 会社情報を一元管理
│   ├── works.ts              # 施工事例データ
│   ├── contactSchema.ts      # フォームのバリデーション
│   └── utils.ts
├── public/
│   └── images/
│       ├── logo.jpg
│       ├── hero.jpg
│       └── works/*.jpg
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 情報の更新方法

### 会社情報を変えたい
`lib/company.ts` を編集してください。電話番号・メール・住所・採用条件など、サイト全体で参照される情報を一元管理しています。

### 施工事例の画像を追加したい
1. 画像を `public/images/works/` に配置
2. `lib/works.ts` の `works` 配列に追記

### キャッチコピーやページの文言を変えたい
各ページファイル(`app/*/page.tsx`)を直接編集してください。

---

## リポジトリ情報

- GitHub: [ANC-takagi/-HP](https://github.com/ANC-takagi/-HP)
- 主ブランチ: `main`
- デプロイ先(予定): Vercel
