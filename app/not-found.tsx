import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[var(--un-deep-blue)] px-4">
      <h1 className="text-2xl font-bold text-white">Page not found</h1>
      <p className="text-center text-white/70">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-white/95"
      >
        Back to ECOSOC
      </Link>
    </div>
  );
}
