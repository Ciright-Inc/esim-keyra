import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helper?: string;
  error?: string;
};

export function Input({ label, helper, error, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s/g, "-");
  return (
    <label className="block w-full" htmlFor={inputId}>
      {label ? <span className="ds-field-label block">{label}</span> : null}
      <input
        id={inputId}
        className={cn("ds-text-input", error && "is-error", className)}
        {...props}
      />
      {error ? <span className="ds-field-error">{error}</span> : null}
      {helper && !error ? <span className="ds-field-helper">{helper}</span> : null}
    </label>
  );
}
