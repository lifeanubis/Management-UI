import React from "react";
import { Table, Checkbox, Pane } from "evergreen-ui";
import Data from "./Data.js";

function ContactTable() {
  return (
    <div className="table-head">
      <Table>
        <div className="table-head">
          <Table.Head height={"50px"}>
            <Table.HeaderCell flexBasis={50} flexShrink={0} flexGrow={0}>
              <Checkbox />
            </Table.HeaderCell>

            <Table.TextHeaderCell flexBasis={200} flexShrink={0} flexGrow={0}>
              Name
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={250} flexShrink={0} flexGrow={0}>
              Email
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={200} flexShrink={0} flexGrow={0}>
              Company name
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={200} flexShrink={0} flexGrow={0}>
              Role
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flexBasis={200} flexShrink={0} flexGrow={0}>
              Recent activity
            </Table.TextHeaderCell>
          </Table.Head>
        </div>
        <div>
          <Table.VirtualBody height={"70vh"}>
            {Data.map((profile) => (
              <Table.Row
                key={profile.id}
                isSelectable
                onSelect={() => alert(profile.id)}
              >
                <Table.TextCell flexBasis={40} flexShrink={0} flexGrow={0}>
                  <Checkbox />
                </Table.TextCell>

                <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
                  <h3>{profile.name}</h3>
                </Table.TextCell>
                <Table.TextCell flexBasis={250} flexShrink={0} flexGrow={0}>
                  {profile.email}
                </Table.TextCell>
                <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
                  {profile.company}
                </Table.TextCell>
                <Table.TextCell
                  isNumber
                  flexBasis={200}
                  flexShrink={0}
                  flexGrow={0}
                >
                  <Pane className="avatar">
                    <h4>{profile.role}</h4>
                  </Pane>
                </Table.TextCell>
                <Table.TextCell
                  isNumber
                  flexBasis={200}
                  flexShrink={0}
                  flexGrow={0}
                >
                  {profile.recent}
                </Table.TextCell>
              </Table.Row>
            ))}
          </Table.VirtualBody>
        </div>
      </Table>
    </div>
  );
}

export default ContactTable;
