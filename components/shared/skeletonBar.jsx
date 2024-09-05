import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonBar() {
  return (
      <div className="flex items-center space-x-4 w-full">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 md:w-[700px] w-[250px]" />
          <Skeleton className="h-4 md:w-[650px] w-[200px]" />
        </div>
      </div>
  )
}
