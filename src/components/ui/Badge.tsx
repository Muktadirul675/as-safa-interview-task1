type Status = "Working" | "In Progress" | "Hold" | "Completed" | "Failed"

function getStatusStyles(status: Status) {
  switch (status) {
    case "Working":
      return "bg-blue-100 text-blue-600 border-blue-200"
    case "In Progress":
      return "bg-yellow-100 text-yellow-600 border-yellow-200"
    case "Hold":
      return "bg-red-100 text-red-600 border-red-200"
    case "Completed":
      return "bg-green-100 text-green-600 border-green-200"
    case "Failed":
      return "bg-gray-200 text-gray-700 border-gray-300"
    default:
      return "bg-gray-100 text-gray-600 border-gray-200"
  }
}

type BadgeSize = "sm" | "md"

function getSizeStyles(size: BadgeSize) {
  switch (size) {
    case "sm":
      return "px-2 py-0.5 text-[10px]"
    case "md":
    default:
      return "px-3 py-1 text-xs"
  }
}

export default function StatusBadge({status,size = "md",}: {status: Status, size?: BadgeSize}) {
  return (
    <span className={`inline-flex items-center font-semibold rounded-md border ${getStatusStyles(status)} ${getSizeStyles(size)}`}>
      {status}
    </span>
  )
}