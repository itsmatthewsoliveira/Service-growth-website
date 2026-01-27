interface InputProps {
  id: string;
  name: string;
  type?: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export default function Input({
  id,
  name,
  type = "text",
  label,
  placeholder,
  required = false,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-white/70 mb-2">
        {label}
        {required && " *"}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-muted border border-white/10 rounded-[4px] text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
