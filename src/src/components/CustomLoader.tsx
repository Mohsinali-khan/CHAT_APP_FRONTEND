import { Loader2 } from "lucide-react"

const CustomLoader = () => {
  return (
    <div className="h-screen flex justify-center items-center" >
        <Loader2 className="size-10 text-primary animate-spin"  />
    </div>
  )
}

export default CustomLoader