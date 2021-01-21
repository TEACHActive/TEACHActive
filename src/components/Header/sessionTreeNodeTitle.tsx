import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Button } from "antd";
import { Session } from "../../pages/metric/metricPage.types";

export interface ISessionTreeNodeTitle {
  sessionNameOrDate: string;
  setSessionName: (session: Session, newSessionName: string) => Promise<void>;
  session: Session;
}

export function SessionTreeNodeTitle(props: ISessionTreeNodeTitle) {
  const [editing, setEditing] = React.useState(false);
  const [newSessionName, setNewSessionName] = React.useState("");

  return editing ? (
    <div>
      <Input
        placeholder={props.sessionNameOrDate}
        value={newSessionName}
        onChange={(event) => setNewSessionName(event.target.value)}
        onClick={(event) => {
          event.stopPropagation();
        }}
        autoFocus
      />{" "}
      <Button
        type="primary"
        onClick={(event) => {
          event.stopPropagation();
          props.setSessionName(props.session, newSessionName);
          setNewSessionName("");
          setEditing(false);
          // let items = [...editingSessionIndexBool];
          // items[i] = false;
          // setEditingSessionIndexBool(items);
        }}
      >
        Save
      </Button>
    </div>
  ) : (
    <div>
      {props.sessionNameOrDate}{" "}
      <FontAwesomeIcon
        icon="edit"
        onClick={(event) => {
          event.stopPropagation();
          setEditing(true);
        }}
      />
    </div>
  );
}