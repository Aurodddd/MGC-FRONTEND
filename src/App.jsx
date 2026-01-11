import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from "./landingpages/Landingpage.jsx";
import Applynow from "./landingpages/Applynow.jsx";
import TenantDashboard from "./tenantpages/dashboard.jsx"
import Tenantmaintenance from "./tenantpages/maintenance.jsx"
import Tenantcontract from "./tenantpages/contract.jsx"
import Tenantpaymenthis from "./tenantpages/paymenthistory.jsx"
import Tenantaccsett from './tenantpages/accsettings.jsx' 
import Admindashboard from "./Adminpages/admindashboard.jsx"
import Admintenants from './Adminpages/admintenants.jsx'
import Adminaccsettings from './Adminpages/adminaccsettings.jsx'
import Adminunits from './Adminpages/adminunits.jsx'
import Admintenantprofile from './Adminpages/admintenantprofile.jsx'
import Adminmaintenance from './Adminpages/adminmaintenance.jsx'
import Adminannouncement from './Adminpages/adminannouncement.jsx'
import Admincontract from './Adminpages/admincontract.jsx'
import Adminpaymenthis from './Adminpages/adminpaymenthis.jsx'
import Adminapplicationreq from './Adminpages/adminapplicationreq.jsx'
import Adminapproval from './Adminpages/adminapproval.jsx'
import Caretakerdashboard from './Caretakerpages/caretakerdashboard.jsx'
import Caretakertenants from './Caretakerpages/caretakertenants.jsx'
import Caretakermaintenance from './Caretakerpages/caretakermaintenance.jsx'
import Caretakercontract from './Caretakerpages/caretakercontracts.jsx'
import Caretakerpaymenthis from './Caretakerpages/caretakerpaymenthis.jsx'
import Caretakeraccsett from './Caretakerpages/caretakeraccsett.jsx'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/lp" element={<Landingpage />} />
        <Route path="/applynowpage" element={<Applynow />} />
        <Route path="/tenantdb" element={<TenantDashboard/>} />
        <Route path="/tenantmaintenance" element={<Tenantmaintenance/>} />
        <Route path="/tenantcontract" element={<Tenantcontract/>} />
        <Route path="/tenantpayments" element={<Tenantpaymenthis/>} />
        <Route path="/tenantsettings" element={<Tenantaccsett/>} />
        <Route path="/" element={<Admindashboard/>} />
        <Route path="/admintenants" element={<Admintenants/>} />
        <Route path="/adminunits" element={<Adminunits/>} />
        <Route path="/admintenantprof" element={<Admintenantprofile/>} />
        <Route path="/adminmaintenance" element={<Adminmaintenance/>} />
        <Route path="/adminannouncement" element={<Adminannouncement/>} />
        <Route path="/admincontract" element={<Admincontract/>} />
        <Route path="/adminpayments" element={<Adminpaymenthis/>} />
        <Route path="/adminapplicationrequest" element={<Adminapplicationreq/>} />
        <Route path="/adminapprovalpage" element={<Adminapproval/>} />
        <Route path="/adminsettings" element={<Adminaccsettings/>} />
        <Route path="/caretakerdb" element={<Caretakerdashboard/>} />
        <Route path="/caretakertenants" element={<Caretakertenants/>} />
        <Route path="/caretakermaintenance" element={<Caretakermaintenance/>} />
        <Route path="/caretakercontract" element={<Caretakercontract/>} />
        <Route path="/caretakerpayments" element={<Caretakerpaymenthis/>} />
        <Route path="/caretakersettings" element={<Caretakeraccsett/>} />
      </Routes>
    </Router>
  );
}

export default App;