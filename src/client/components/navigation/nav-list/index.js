import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavItem } from '../nav-item';

import './index.scss';

function NavList({
  list, onClick, selectedItem,
}) {
  const [expandedMap, setExpandedMap] = useState({});

  return (
    <div className="menu-list">
      {list.map(
        ({
          id, label, icon, nodes,
        }) => {
          const isExpanded = expandedMap && expandedMap[id];

          return (
            <Fragment key={id}>
              <NavItem
                id={id}
                label={label}
                onClick={onClick}
                nodes={nodes}
                icon={icon}
                isSelected={selectedItem === id}
                isExpanded={isExpanded}
                onToggleExpand={setExpandedMap}
              />
              {nodes && nodes.length && isExpanded
                    && <NavList list={nodes} onClick={onClick} selectedItem={selectedItem} />}
            </Fragment>
          );
        },
      )}
    </div>
  );
}

NavList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    nodes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.string,
    })),
    icon: PropTypes.string,
  })),
  onClick: PropTypes.func,
  selectedItem: PropTypes.string,
};

NavList.defaultProps = {
  list: [],
  onClick: () => {},
  selectedItem: '',
};
export default NavList;
