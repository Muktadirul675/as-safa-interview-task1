import { useIncrementalNumber } from "../../hooks/useIncrementalNumber"

interface Analysis {
  label: string
  percentage: number
}

const analytics : Analysis[] = [
  { label: "S", percentage: 0 },
  { label: "M", percentage: 30 },
  { label: "T", percentage: 95 },
  { label: "W", percentage: 50 },
  { label: "T", percentage: 100 },
  { label: "F", percentage: 0 },
  { label: "S", percentage: 0 },
]

function getColorClass(percentage: number) {
  if (percentage > 80) return "bg-theme-primary"
  if (percentage > 50) return "bg-theme-secondary"
  return "bg-theme-hover"
}

function AnalysisBar({ analysis }: { analysis: Analysis }) {
  const percentage = useIncrementalNumber(analysis.percentage);

  return (
    <div className="flex flex-row md:flex-col items-start md:items-center gap-2 w-full">
      <span className="md:hidden text-sm font-medium">
        {analysis.label}
      </span>
      <div className="relative w-full h-3 md:w-10 md:h-35 rounded-full overflow-hidden bg-[repeating-linear-gradient(45deg,#91c8af,#fff_5px)] md:bg-[repeating-linear-gradient(135deg,#91c8af,#fff_5px,#fff_10px)]">
        <div className="absolute inset-0">
          <div className={`md:hidden h-full ${getColorClass(percentage)}`} style={{ width: `${percentage}%` }} />
          <div className={`hidden md:block absolute bottom-0 w-full ${getColorClass(percentage)}`} style={{ height: `${percentage}%` }} />
        </div>
      </div>
      <span className="hidden md:block text-sm font-medium mt-2">
        {analysis.label}
      </span>
    </div>
  )
}

export default function ProjectAnalytics() {
  return (
    <div className="w-full p-5 bg-white rounded-lg md:rounded-2xl">
      <h3 className="text-2xl font-semibold font-medium">Project Analytics</h3>
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
        {analytics.map((item, index) => (
          <AnalysisBar key={index} analysis={item} />
        ))}
      </div>
    </div>
  )
}