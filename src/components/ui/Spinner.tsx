type SpinnerSize = "sm" | "md" | "lg"

const sizeClasses: Record<SpinnerSize, string> = {
  sm: "w-4 h-4 border-2",
  md: "w-8 h-8 border-4",
  lg: "w-16 h-16 border-8",
}

export default function Spinner({ size = "md" }: { size?: SpinnerSize }) {
  return (
    <div
      className={`
        ${sizeClasses[size]} 
        border-t-transparent border-theme-primary border-solid rounded-full
        animate-spin
      `}
    ></div>
  )
}