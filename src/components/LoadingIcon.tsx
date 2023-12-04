import { AiOutlineLoading3Quarters } from "react-icons/ai"

import React from "react"

export default function LoadingIcon({ className }: { className?: string }) {
    return (
      <div className={className}>
        <div className={`animate-spin rounded-full max-w-max`}>
            <AiOutlineLoading3Quarters />
        </div>

      </div>
    )
}
