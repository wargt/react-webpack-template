import React, { useState, Fragment } from 'react';
import Modal from '@/components/modal/modal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from '@/router';
import Navigation from '@/components/navigation/navigation';

export default function App() {
  // modal
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const renderRoutes = routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={(
        <React.Suspense fallback={<>...</>}>
          <route.component />
        </React.Suspense>
    )}
    />
  ));

  return (
    <Router>
      <div>
        <header>header</header>
        <div style={{ display: 'flex' }}>
          <Navigation />

          <Routes>
            { renderRoutes }
          </Routes>
          <br />
          <br />
        </div>
        <footer>
          footer
          <button type="button" onClick={toggleModal}>Show modal</button>
        </footer>
        { showModal && (
        <Modal title="My test modal" onClose={toggleModal}>
          <div>123 content</div>
        </Modal>
        )}
      </div>
    </Router>
  );
}
