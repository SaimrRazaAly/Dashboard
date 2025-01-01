import { useEffect } from "react"
import { BrowserRouter, Routes,route } from "react-router-dom"
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div className="flex realtive dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{zIndex :'1000'}}>

<TooltipComponent content={"settings"} position="Top">
  <button>
    <FiSettings/>
  </button>

</TooltipComponent>
        </div>

      </div>
      </BrowserRouter>
    </div>
  )
}

export default App