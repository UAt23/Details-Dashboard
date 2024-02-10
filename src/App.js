import './App.css';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import { Button } from 'flowbite-react';

function App() {
  return (
    <div className='h-full bg-[#F9F9F9]'>
      <Navbar></Navbar>
      <Layout></Layout>
    </div>
  );
}

export default App;
