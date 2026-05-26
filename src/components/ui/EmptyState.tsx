type EmptyStateProps = {
  title: string;
  description?: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="ds-empty-state">
      <p className="ds-title-md">{title}</p>
      {description ? <p className="ds-body-sm mt-2">{description}</p> : null}
    </div>
  );
}
