import React from 'react';

const TabMenu = ({ tabs, onSelect }) => {
  return (
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab.id}>
          <a className="nav-link" onClick={() => onSelect(tab.id)} data-bs-toggle="dropdown">
            {tab.title}
          </a>
          <div className="dropdown-menu">
            {tab.submenu.map((sub, index) => (
              <a className="dropdown-item" key={index} href="#">{sub}</a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TabMenu;
