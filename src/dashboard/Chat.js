import React, { useState } from "react";
import SideNav from "./SideNav";
import SearchBar from "./SearchBar";

import {
  Pane,
  Pill,
  Text,
  Heading,
  GraphIcon,
  Tooltip,
  TextInput,
  Paragraph,
  PaperclipIcon,
} from "evergreen-ui";
import immage from "./11.jpg";

function Chat() {
  const messageData = [];

  const [messages, setMessages] = useState(messageData);

  const addMessage = (message) => {
    message.id = messages.length + 1;
    setMessages([...messages, message]);
  };

  const initialFormState = { id: null, msg: "" };
  const [message, setMessage] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMessage({ ...messages, [name]: value });
  };

  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  return (
    <div className="dashboard">
      <SideNav />
      <div>
        <SearchBar />

        <Pane
          display="grid"
          gridTemplateColumns="1fr 1fr"
          justifyContent="center"
          marginTop={30}
          marginRight={30}
          marginLeft={30}
          gridGap={40}
        >
          <Pane justifyContent="center" width={400} height={586}>
            <Pane
              borderBottom="default"
              display="grid"
              height={80}
              width="100%"
              background="#234361"
              alignItems="center"
              gridDirection="row"
            >
              <Pane
                marginLeft={30}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Pane alignItems="center" display="flex">
                  <img src={immage} className="red" />
                  <Text size={500} color="white">
                    name
                  </Text>
                </Pane>

                <Heading size={100} color="white">
                  22 july 2020 11:25
                </Heading>
              </Pane>

              <Pane
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginLeft={50}
                marginBottom={10}
                marginRight={30}
              >
                <Text color="white" size={300}>
                  messages to be shown
                </Text>
                <Pill isSolid="true" color="red">
                  2
                </Pill>
              </Pane>
            </Pane>
          </Pane>
          <Pane width={700} height={550} background="seagreen ">
            <Pane
              display="flex"
              flexDirection="row"
              height={50}
              background="#084B8A"
              alignItems="center"
            >
              <Heading marginRight={560} color="white" size={500}>
                Name
              </Heading>
              <Tooltip content="settings">
                <GraphIcon />
              </Tooltip>
            </Pane>
            <Pane>
              <Pane background="#D4EEE2" width={660} height={460}>
                <Pane>
                  <Pane>
                    <Heading size={300} float="left">
                      Bablu pandeey
                      <Text marginLeft={10}>8/32</Text>
                    </Heading>
                  </Pane>
                  <Pane
                    marginLeft={30}
                    background="#14B5D0"
                    height="auto"
                    float="left"
                    minWidth="min-content"
                    maxWidth={400}
                    borderRadius={10}
                  >
                    <Paragraph margin={10} color="black" size={500}>
                      yo!! this chat part is nt
                    </Paragraph>
                  </Pane>
                </Pane>
                {messages.map((messagess) => (
                  <Pane key={messagess.id}>
                    <Pane>
                      <Heading size={300} float="right">
                        you
                        <Text marginLeft={10}>
                          {hours < 10 ? `0${hours}` : hours}/
                          {min < 10 ? `0${min}` : min}
                        </Text>
                      </Heading>
                    </Pane>

                    <Pane
                      marginBottom={10}
                      marginRight={30}
                      borderRadius={10}
                      minWidth="min-content"
                      maxWidth={400}
                      float="right"
                      height="auto"
                      background="#47B881"
                    >
                      <Pane>
                        <Paragraph margin={10} color="black" size={500}>
                          {messagess.msg}
                        </Paragraph>
                      </Pane>
                    </Pane>
                  </Pane>
                ))}
              </Pane>
              <Pane alignItems="center" display="flex">
                <form
                  autoComplete="off"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!message.msg) return;
                    addMessage(message);
                    setMessage(initialFormState);
                  }}
                >
                  <TextInput
                    width={600}
                    height={40}
                    type="text"
                    name="msg"
                    value={message.msg}
                    onChange={handleInputChange}
                  />
                </form>

                <Pane
                  marginLeft={10}
                  display="flex"
                  alignItems="center"
                  width={100}
                  height={40}
                >
                  <PaperclipIcon size={20} />
                  <PaperclipIcon size={20} marginLeft={10} />
                </Pane>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </div>
    </div>
  );
}

export default Chat;
