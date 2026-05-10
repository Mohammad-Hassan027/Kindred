"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { useInView } from "framer-motion"

import { cn } from "@/lib/utils"

function Progress({
  className,
  children,
  value,
  ...props
}: ProgressPrimitive.Root.Props) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const animatedValue = isInView ? value : 0

  return (
    <ProgressPrimitive.Root
      ref={ref}
      value={animatedValue}
      data-slot="progress"
      className={cn("flex flex-wrap gap-3", className)}
      {...props}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  )
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  return (
    <ProgressPrimitive.Track
      className={cn(
        "relative flex h-2 w-full items-center overflow-x-hidden rounded-4xl bg-stone-200/60 dark:bg-stone-800/60",
        className
      )}
      data-slot="progress-track"
      {...props}
    />
  )
}

function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn("h-full rounded-4xl bg-emerald-500 transition-all duration-1000 ease-out dark:bg-emerald-400", className)}
      {...props}
    />
  )
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn("text-sm font-medium", className)}
      data-slot="progress-label"
      {...props}
    />
  )
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn(
        "ml-auto text-sm text-muted-foreground tabular-nums",
        className
      )}
      data-slot="progress-value"
      {...props}
    />
  )
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
}
