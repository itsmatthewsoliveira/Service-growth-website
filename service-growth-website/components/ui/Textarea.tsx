interface TextareaProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

export default function Textarea({
  id,
  name,
  label,
  placeholder,
  required = false,
  rows = 3,
}: TextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-white/70 mb-2">
        {label}
        {required && " *"}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-muted border border-white/10 rounded-[4px] text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors resize-none"
      />
    </div>
  );
}
