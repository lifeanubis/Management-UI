import React, { useState } from "react";
import TaskChart from "./TaskChart";
import Profile from "./TaskData";

import {
  Table,
  TableHead,
  Checkbox,
  TableHeaderCell,
  Pane,
  Button,
  Avatar,
} from "evergreen-ui";

function UniTable() {
  const [checkAll, setCheckAll] = useState(false);
  const [check, setCheck] = useState(false);

  let one = (e) => {
    onchange = (e) => setCheck();
  };

  return (
    <div className="table-head">
      <Table>
        <div className="table-head">
          <Table.Head height={"50px"}>
            <Table.HeaderCell flexBasis={10} flexShrink={0} flexGrow={0}>
              <Checkbox
                checked={checkAll}
                onChange={(e) => setCheckAll(e.target.checked)}
              />
            </Table.HeaderCell>

            <Table.TextHeaderCell flexBasis={100} flexShrink={0} flexGrow={0}>
              Status
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={250} flexShrink={0} flexGrow={1}>
              Title
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={150} flexShrink={0} flexGrow={0}>
              Type
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={200} flexShrink={0} flexGrow={0}>
              Associated with
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={100} flexShrink={0} flexGrow={0}>
              Due date
            </Table.TextHeaderCell>
          </Table.Head>
        </div>
        <div>
          <Table.VirtualBody height={"70vh"}>
            {Profile.map((profile) => (
              <Table.Row
                key={profile.id}
                isSelectable
                hoverElevation={4}
                activeElevation={4}
              >
                <Table.TextCell flexBasis={40} flexShrink={0} flexGrow={0}>
                  {/* {profile.id === "" ? (
                    <Checkbox
                      checked={checkAll}
                      onChange={(e) => setCheckAll(e.target.checked)}
                    />
                  ) : (
                    <Checkbox
                      checked={check}
                      onChange={(e) => setCheck(e.target.checked)}
                    />
                  )} */}
                </Table.TextCell>

                <Table.TextCell flexBasis={120} flexShrink={0} flexGrow={0}>
                  {profile.status === "completed" ? (
                    <Button appearance="primary" intent="success">
                      compleated
                    </Button>
                  ) : (
                    <Button appearance="primary" intent="warning">
                      active
                    </Button>
                  )}
                </Table.TextCell>
                <Table.TextCell flexBasis={250} flexShrink={0} flexGrow={1}>
                  {profile.title}
                </Table.TextCell>
                <Table.TextCell flexBasis={150} flexShrink={0} flexGrow={0}>
                  {profile.associated}
                </Table.TextCell>
                <Table.TextCell
                  isNumber
                  flexBasis={200}
                  flexShrink={0}
                  flexGrow={0}
                >
                  <Pane className="avatar">
                    <Avatar name={profile.associated} size={40} />
                    <h4>{profile.associated}</h4>
                  </Pane>
                </Table.TextCell>
                <Table.TextCell
                  isNumber
                  flexBasis={100}
                  flexShrink={0}
                  flexGrow={0}
                >
                  {profile.date}
                </Table.TextCell>
              </Table.Row>
            ))}
          </Table.VirtualBody>
        </div>
      </Table>
    </div>
  );
}

export default UniTable;
