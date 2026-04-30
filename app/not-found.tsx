import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-steel-50">
      <div className="container-x text-center">
        <p className="font-display text-7xl font-bold tracking-tight text-brand-700 sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
          ページが見つかりません
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-steel-600">
          お探しのページは移動・削除された可能性があります。
        </p>
        <div className="mt-8">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" />
            トップページへ戻る
          </Link>
        </div>
      </div>
    </section>
  );
}
