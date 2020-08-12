import React from "react";
import immage from "./11.jpg";
import SideNav from "./SideNav";
import SearchBar from "./SearchBar";
import {
  Pane,
  Popover,
  Button,
  Icon,
  Combobox,
  Image,
  Avatar,
} from "evergreen-ui";
import ContactTable from "./ContactTable";

function Contact() {
  return (
    <div className="dashboard">
      <SideNav />
      <div>
        <SearchBar />

        <div className="task-layer1">
          <div className="task-row1">
            <div className="contact-btn">
              <h4>Company</h4>
              <Button
                width="auto"
                height={20}
                appearance="minimal"
                iconAfter="caret-down"
              >
                All
              </Button>
            </div>
          </div>
          <div>
            <div className="task-button">
              <Popover
                content={({ close }) => (
                  <Pane width={300} height={400}>
                    <div className="avatar-contact">
                      <Avatar
                        src={immage}
                        name="JK "
                        size={100}
                        isSolid="true"
                      />
                      <h3>Name</h3>
                      <h4>description</h4>
                    </div>
                    <div>
                      <div className="avatar-contact1">
                        <h4>Email</h4>
                        <input className="popover2" />
                      </div>
                      <div className="avatar-contact1">
                        <h4>Company</h4>
                        <input className="popover2" />
                      </div>

                      <div className="Contact-cr-btn">
                        <Button
                          onClick={() => alert("congo")}
                          appearance="primary"
                        >
                          Add
                        </Button>
                        <div>
                          <Button onClick={close} appearance="primary">
                            Cancell
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Pane>
                )}
              >
                <Button appearance="primary" className="task-button">
                  Add contact
                </Button>
              </Popover>
            </div>
          </div>
        </div>
        <div className="task-content">
          <div>
            <Pane background="ivory">
              <ContactTable />
            </Pane>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
