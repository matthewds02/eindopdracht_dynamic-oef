import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import './styles/navBar.css';
import './styles/mainPage.css';
import './services/firestore';
import ApplePage from "./pages/ApplePage";
import SamsungPage from "./pages/SamsungPage";
import HuaweiPage from "./pages/HuaweiPage";
import OnePlusPage from "./pages/OnePlusPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import {useCollectionFromDatabase} from './components/CollectionDatabase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ToastContainer} from "react-toastify";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0); // Initialiseer de state met de index van de huidige tab
    const {airpodsValues, galaxyBudsValues, huaweiBudsValues, oneplusBudsValues} = useCollectionFromDatabase();
    const [cart, setCart] = useState([]);

    console.log(cart);
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
                <Tab className="nav-item cart">
                    <a href="#" className={selectedIndex === 5 ? 'nav-link selected' : 'nav-link'}>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </a>
                </Tab>
            </TabList>
      </div>



      <div className="window">
          <TabPanel>
              <HomePage setCart={setCart}/>
          </TabPanel>
          <TabPanel>
              <ApplePage airpods={airpodsValues} setCart={setCart}/>
          </TabPanel>
          <TabPanel>
              <SamsungPage galaxyBuds={galaxyBudsValues} setCart={setCart}/>
          </TabPanel>
          <TabPanel>
              <HuaweiPage huaweiBuds={huaweiBudsValues} setCart={setCart}/>
          </TabPanel>
          <TabPanel>
              <OnePlusPage onePlusBuds={oneplusBudsValues} setCart={setCart}/>
          </TabPanel>
          <TabPanel>
              <CartPage/>
          </TabPanel>
      </div>
        <ToastContainer/>
  </Tabs>
}

export default App;
