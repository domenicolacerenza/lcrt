import Stream from "./pages/Stream";
import Portfolio from "./pages/Portfolio"
import { Folder } from "@/components/Folder";
import Latest from './pages/Latest';


const Menu = () => {

  return (
    <div className="fixed md:bottom-6 bottom-3 flex flex-row gap-6">



      <Folder title={"※"}
        modalWindow={<Latest />}
      />

      <Folder
        title={"♬"}
        modalWindow={<Stream />}
      />

      <Folder title={"✦"}
        modalWindow={<Portfolio />}
      />


    </div>)
}
export default Menu;
