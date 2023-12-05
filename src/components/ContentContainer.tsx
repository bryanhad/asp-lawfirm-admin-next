import React from 'react'

export default function ContentContainer({children, className}:{children:React.ReactNode, className?:string}) {
  return (
    <div className={`p-6 md:p-12 ${className}`}>
      {children}
    </div>
  )
}
