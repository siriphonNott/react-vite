import React from 'react'
import { Header, Footer, Sidebar, SidebarMB } from '@/layouts/'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Dashboard, Todos, Users, Charts, PageNotFound } from '@/views'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <Router>
      <Header />
        <Sidebar />
        <SidebarMB />
        <main className="sm:ml-48 ml-12 sm:p-5 p-0">
          <div className="content bg-white shadow-xl p-5 mb-8">
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/todos" component={Todos} />  
                <Route exact path="/users" component={Users} />  
                <Route path="/charts" component={Charts} />  
                <Route path="*" component={PageNotFound} />  
              </Switch>
            </AnimatePresence>
          </div>
        </main>
      <Footer />
      <ToastContainer />
    </Router>
  )
}

export default App
