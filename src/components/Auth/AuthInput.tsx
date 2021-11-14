interface AuthInputProps {
  label: string;
  name: string;
  value: any;
  placeholder: string;
  required: boolean;
  type: "text" | "password" | "email";
  setValue: (value: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col mt-4">
      <label>{props.label}</label>
      <input
        className={`
        px-r py-3 rounded-lg  bg-gray-200 px-2 mt-1 
        border 
        focus:outline-none
        focus:ring-2 focus:ring-blue-500
        focus:bg-white
        `}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={(e) => props.setValue?.(e.target.value)}
        required={props.required}
      />
    </div>
  );
}
