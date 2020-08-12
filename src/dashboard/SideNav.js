import React from "react";
import { Link } from "react-router-dom";
import {
  NotificationsIcon,
  DashboardIcon,
  PersonIcon,
  ChatIcon,
  BadgeIcon,
  Heading,
} from "evergreen-ui";
import Account from "./Account";
// import "./dashboard.css";
function SideNav() {
  return (
    <div className="boss">
      <div className="side-nav">
        <div className="side-item">
          <Heading size={600} marginBottom={50} color="ivory">
            Personal Manager
          </Heading>

          <Account className="links" />

          <ul>
            <li>
              <h2>
                <Link to="/" className="links">
                  <DashboardIcon marginRight={10} />
                  Dashboard
                </Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link to="/task" className="links">
                  <BadgeIcon marginRight={10} />
                  Tasks
                </Link>
              </h2>
            </li>

            <li>
              <h2>
                <Link to="/chat" className="links">
                  <ChatIcon marginRight={10} />
                  Chat
                </Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link to="/contact" className="links">
                  <PersonIcon marginRight={10} />
                  Contact
                </Link>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
