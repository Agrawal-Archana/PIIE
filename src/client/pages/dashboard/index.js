import React, { useState } from 'react';

import Sidebar from './side-bar';
import { NavigationList } from '../../utils/helpers/dashboard-helper';

import './index.scss';

function Dashboard() {
  const [selectedItem, setSelectedItem] = useState(NavigationList[0].id);

  return (
    <div className="dashboard-page">
      <Sidebar
        header="Untitled UI"
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className="page-content">
        {`Page contents will be coming soon for ${selectedItem}`}
      </div>
    </div>
  );
}

export default Dashboard;
