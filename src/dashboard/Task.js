import React from "react";
import SideNav from "./SideNav";
import SearchBar from "./SearchBar";
import {
  Pane,
  Popover,
  Button,
  Icon,
  Combobox,
  Heading,
  Strong,
  TextInput,
  Label,
} from "evergreen-ui";
import UniTable from "./UniTable";

function Task() {
  return (
    <div className="dashboard">
      <SideNav />
      <div>
        <SearchBar />

        <Pane display="flex" justifyContent="space-between" padding={20}>
          <Pane display="flex">
            <Heading>Date</Heading>
            <Heading>Type</Heading>
          </Pane>

          <Popover
            shouldCloseOnExternalClick={false}
            content={({ close }) => (
              <Pane width={350} height={500}>
                <Pane display="flex" justifyContent="space-between">
                  <Heading padding={0} size={700}>
                    Create Task
                  </Heading>
                  <Icon color="red" onClick={close} size={30} icon="cross" />
                </Pane>

                <Pane
                  paddingTop={25}
                  display="flex"
                  justifyContent="space-around"
                >
                  <Button appearance="primary" intent="success">
                    <Heading color="ivory" padding={0}>
                      Completed
                    </Heading>
                  </Button>
                  <Button appearance="primary" intent="warning">
                    <Heading color="ivory" padding={0}>
                      Active
                    </Heading>
                  </Button>
                </Pane>

                <Pane>
                  <Heading>Title</Heading>
                  <TextInput size={500} width="100%" />
                </Pane>

                <Heading>Type</Heading>
                <Combobox
                  width="100%"
                  initialSelectedItem={{ label: "Call" }}
                  items={[
                    { label: "Call" },
                    { label: "Meeting" },
                    { label: "Reminder" },
                    { label: "Email" },
                    { label: "Event" },
                    { label: "Random" },
                  ]}
                  itemToString={(item) => (item ? item.label : "")}
                  onChange={(selected) => console.log(selected)}
                />
                <Heading>Associated with</Heading>
                <Combobox
                  width="100%"
                  initialSelectedItem={{ label: "Bob" }}
                  items={[
                    { label: "Rudra" },
                    { label: "Yamraj" },
                    { label: "Indra" },
                    { label: "Rishi Matang" },
                  ]}
                  itemToString={(item) => (item ? item.label : "")}
                  onChange={(selected) => console.log(selected)}
                />
                <Heading>Due Date</Heading>
                <Combobox
                  width="100%"
                  items={[]}
                  onChange={(selected) => console.log(selected)}
                />

                <Pane>
                  <Button
                    borderRadius={10}
                    justifyContent="center"
                    width={150}
                    height={50}
                    marginTop={20}
                    marginLeft={130}
                    onClick={() => alert()}
                    appearance="primary"
                  >
                    Create
                  </Button>
                </Pane>
              </Pane>
            )}
          >
            <Button
              width={150}
              height={50}
              justifyContent="center"
              borderRadius={10}
              appearance="primary"
            >
              Creaate Task
            </Button>
          </Popover>
        </Pane>

        <Pane paddingLeft={30} paddingRight={30}>
          <UniTable />
        </Pane>
      </div>
    </div>
  );
}

export default Task;
