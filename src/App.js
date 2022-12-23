import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import './styles/navBar.css';
import {
    PICTURES_AIRPODS,
    PICTURES_GALAXYBUDS,
    PICTURES_HUAWEIBUDS,
    PICTURES_ONEPLUSBUDS
} from "./data/data";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ApplePage} from "./pages/ApplePage";
import {SamsungPage} from "./pages/SamsungPage";
import {HuaweiPage} from "./pages/HuaweiPage";
import {OnePlusPage} from "./pages/OnePlusPage";

function App() {
  return <Tabs>
      <div className="nav-container">
          <TabList>
              <Tab className="nav-item">
                  <a href="#" className="nav-link">
                      Bluetooth earbuds
                  </a>
              </Tab>
              <Tab className="nav-item">
                  <a href="#" className="nav-link">
                      Apple AirPods
                  </a>
              </Tab>
              <Tab className="nav-item">
                  <a href="#" className="nav-link">
                      Samsung earbuds
                  </a>
              </Tab>
              <Tab className="nav-item">
                  <a href="#" className="nav-link">
                      Huawei Freebuds
                  </a>
              </Tab>
              <Tab className="nav-item">
                  <a href="#" className="nav-link">
                      OnePlus Buds
                  </a>
              </Tab>
          </TabList>
      </div>



      <div className="window">
          <TabPanel>
              <h1>all wireless headphones</h1>
          </TabPanel>
          <TabPanel>
              <ApplePage airpods={PICTURES_AIRPODS} />
          </TabPanel>
          <TabPanel>
              <SamsungPage galaxyBuds={PICTURES_GALAXYBUDS} />
          </TabPanel>
          <TabPanel>
              <HuaweiPage huaweiBuds={PICTURES_HUAWEIBUDS} />
          </TabPanel>
          <TabPanel>
              <OnePlusPage onePlusBuds={PICTURES_ONEPLUSBUDS} />
          </TabPanel>
      </div>
  </Tabs>
}

export default App;
