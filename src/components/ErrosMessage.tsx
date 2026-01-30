import type React from "react"

type ErrosMessageProps = {
    children: React.ReactNode
}

const ErrosMessage = ({children} : ErrosMessageProps) => {
  return (
    <p className="bg-red-50 text-red-600 p-3 uppercase text-sm font-bold text-center">
        {children}
    </p>
  )
}

export default ErrosMessage
