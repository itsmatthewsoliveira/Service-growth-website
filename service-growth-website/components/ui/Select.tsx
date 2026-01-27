interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  name: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
}

export default function Select({
  id,
  name,
  label,
  options,
  placeholder = "Select an option",
  required = false,
}: SelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-white/70 mb-2">
        {label}
        {required && " *"}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        className="w-full px-4 py-3 bg-muted border border-white/10 rounded-[4px] text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: "right 0.75rem center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1.5em 1.5em",
        }}
      >
        <option value="" className="bg-muted">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-muted">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
