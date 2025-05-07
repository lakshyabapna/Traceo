import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';
import Profile from './Components/Profile/Profile';
import Layout from './Components/CommonLayout/CommonLayout';

function ProtectedPage({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedPage>
                <Dashboard />
              </ProtectedPage>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/profile"
            element={
                <Profile />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
