import './App.css';
// import MainApp from './components';
import MainApp from './components/MainApp';
import { Route, Routes } from 'react-router-dom';
import FormSection from "./components/FormSection";
import Footer from './components/Footer';
import Header from './components/Header';
import ViewTicketPage from './components/ViewTicketPage'
import AdminLogin from './components/AdminLogin';
import Enquiryform from './components/Enquiryform';
import DashBoard from './components/DashBoard';
function App() {
  return (
    <div>
      <div className="header row">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path='/login' element={<AdminLogin />} />
        <Route path='/buy' element={<FormSection />} />
        <Route path='/viewTicket' element={<ViewTicketPage />} />
        <Route path='/enquiryfrom' element={<Enquiryform />} />
        <Route path='/Adminlogin' element={<AdminLogin />} />
        <Route path='/DashBoard' element={<DashBoard />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>


  );
}
<div className="form">
  <FormSection />
</div>
export default App;
