import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import {PRODUCTS_DATA, PICTURES_AIRPODS} from "./data/data";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ApplePage} from "./pages/ApplePage";

function App() {
  return <Tabs>
        <TabList>
            <Tab>bluetooth earbuds</Tab>
            <Tab>Apple airpods</Tab>
            <Tab>Samsung earbuds</Tab>
            <Tab>Huawei freebuds</Tab>
            <Tab>OnePlus Buds</Tab>
        </TabList>

        <TabPanel>
            <h1>all wireless headphones</h1>
        </TabPanel>
        <TabPanel>
            <ApplePage airpods={PICTURES_AIRPODS}/>
        </TabPanel>
  </Tabs>
}

export default App;
