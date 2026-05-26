export default function Loading() {
  return (
    <div className="ds-page flex min-h-[50vh] flex-col items-center justify-center gap-4 py-24">
      <div className="ds-skeleton h-12 w-12 rounded-full" role="status" aria-label="Loading" />
      <p className="ds-caption-uppercase">Establishing trusted session…</p>
    </div>
  );
}
