import { useState } from "react";

const useWp = () => {
   const [loaded, setLoaded] = useState(false)

   return [loaded]
}


export default useWp