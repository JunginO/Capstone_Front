import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import editicon from "../../../assets/editicon.png";
import { EditPlanModal } from "./EditPlanModal";
import { useState } from "react";
const BoxWrapper = styled.div`
  span {
    display: block;
  }
  .edit-icon{
  width:17px;
  float:right;
 
  }


`;
const PlaylistContentBox = ({ data }) => {
  const [open,setOpen]=useState(false);
  return (
    <BoxWrapper>
      <Card className="mt-2">
        <Card.Header className="card-header">{data.title}
        <img className="edit-icon"  src={editicon} onClick={()=>setOpen(true)}/></Card.Header>
        <EditPlanModal  show={open}
        onHide={() => setOpen(false)}
        title={data.title}
        content={data.content}/>
        <Card.Body>
          <span>{data.content}</span>
        </Card.Body>
      </Card>
    </BoxWrapper>
  );
};
export default PlaylistContentBox;
