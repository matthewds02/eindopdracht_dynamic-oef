import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import './styles/navBar.css';
import './styles/mainPage.css';

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
import { useState } from 'react';

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0); // Initialiseer de state met de index van de huidige tab

  return <Tabs selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
      <div className="nav-container">
          <TabList>
              <Tab className="nav-item">
                  <a href="#" className={selectedIndex === 0 ? 'nav-link selected' : 'nav-link'}>
                      Bluetooth earbuds
                  </a>
              </Tab>
              <Tab className="nav-item">
                  <a href="#" className={selectedIndex === 1 ? 'nav-link selected' : 'nav-link'}>
                      Apple AirPods
                  </a>
              </Tab>
              <Tab className="nav-item">
                  <a href="#" className={selectedIndex === 2 ? 'nav-link selected' : 'nav-link'}>
                      Samsung earbuds
                  </a>
              </Tab>
              <Tab className="nav-item">
                  <a href="#" className={selectedIndex === 3 ? 'nav-link selected' : 'nav-link'}>
                      Huawei Freebuds
                  </a>
              </Tab>
              <Tab className="nav-item">
                  <a href="#" className={selectedIndex === 4 ? 'nav-link selected' : 'nav-link'}>
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
