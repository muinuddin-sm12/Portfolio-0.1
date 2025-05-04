import * as React from "react"


function Textarea({ ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={"border-b  text-gray-600 border-gray-400 text-sm outline-none"}
      {...props}
    />
  )
}

export { Textarea }
