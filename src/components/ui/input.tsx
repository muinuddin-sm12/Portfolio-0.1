import * as React from "react"


function Input({type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={"border-b text-gray-600 w-full border-gray-400 outline-none text-sm"}
      {...props}
    />
  )
}

export { Input }
