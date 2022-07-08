import { useState } from "react"

import SideBar from "./componets/SideBar"
import Panel from "./componets/Panel"

function App() {

  const [verSideBar, setverSideBar] = useState(true)

  return (
    <div className="bg-third h-screen w-screen flex">
      <SideBar verSideBar={verSideBar} setverSideBar={setverSideBar} />
      <Panel />
    </div>
  )
}

export default App
