import React from "react";
import "./dashboard.css";
import {
  Pane,
  SearchInput,
  NotificationsIcon,
  Button,
  Heading,
  Text,
  Strong,
  Code,
} from "evergreen-ui";
import { Switch, Link } from "react-router-dom";
import SideNav from "./SideNav";
import SearchBar from "./SearchBar";
import TaskChart from "./TaskChart";
import Profiles from "./TaskData";
import ReactPlayer from "react-player";

function DashBoard() {
  return (
    <div>
      <Pane display="grid" gridTemplateColumns="250px auto">
        <Pane>
          <SideNav />
        </Pane>
        <Pane display="grid" gridTemplateRows="40px auto">
          <Pane>
            <SearchBar />
          </Pane>
          <Pane background="#EDF0F2">
            <Pane
              display="grid"
              gridGap={25}
              margin={30}
              marginBottom={0}
              gridTemplateColumns="700px auto"
            >
              <Pane
                width="100%"
                display="grid"
                gridTemplateRows="140px auto"
                gridGap="20px"
                elevation={2}
                height={570}
                background="ivory"
              >
                <Pane elevation={2}>
                  <Heading padding={5}>status bar</Heading>
                  <Heading padding={5}> {Date.now()} </Heading>
                </Pane>
                <Pane display="grid" gridTemplateRows="90% 10%">
                  <Pane>
                    {Profiles.map((profile) => (
                      <Pane
                        key={profile.id}
                        hoverElevation={2}
                        height={110}
                        width="95%"
                        marginBottom={15}
                        marginLeft={15}
                        padding={10}
                      >
                        <Pane display="flex" justifyContent="space-between">
                          <Strong>
                            <Heading padding={5}>{profile.title}</Heading>
                          </Strong>
                          <Heading color="#47B881" padding={5}>
                            {profile.type}
                          </Heading>
                        </Pane>
                        <Pane display="flex" justifyContent="space-between">
                          <Heading padding={5} size={100}>
                            Due date: <Strong>{profile.date}</Strong>
                          </Heading>
                        </Pane>
                        <Pane display="flex" justifyContent="space-between">
                          <Heading padding={5}> {profile.associated} </Heading>

                          {profile.status === "active" ? (
                            <Heading
                              background="#1070CA"
                              color="ivory"
                              padding={5}
                            >
                              {profile.status}
                            </Heading>
                          ) : (
                            <Heading
                              background="#BF0E08"
                              color="ivory"
                              padding={5}
                            >
                              {profile.status}
                            </Heading>
                          )}
                        </Pane>
                      </Pane>
                    ))}
                  </Pane>
                  <Pane marginLeft="45%">
                    <Button appearance="primary">Show more</Button>
                  </Pane>
                </Pane>
              </Pane>
              <Pane
                overflow="hidden"
                display="grid"
                gridTemplateRows="1fr 1fr"
                gridGap={10}
                justifyContent="center"
              >
                <Pane background="ivory">
                  <TaskChart />
                </Pane>
                <Pane margin={0} padding={0} background="ivory">
                  <ReactPlayer
                    pverflow="hidden"
                    width="100%"
                    height="100%"
                    url="https://www.youtube.com/watch?v=F3oLMjcGYOM"
                  />
                </Pane>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </div>
  );
}

export default DashBoard;
