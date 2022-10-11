import { Modal,ButtonGroup,ToggleButton,Button } from "react-bootstrap";
import { useState } from "react";
export function InterestModal(props) {
    const [name, setName] = useState("");
    const [radioValue, setRadioValue] = useState('1');
    const value = name;
    window.localStorage.setItem( "Interest", JSON.stringify(value));
 
    const radios = [
      { name: '선택하지 않음 ', value: '0' },
      { name: '건강 ', value: '1' },
      { name: '취미 ', value: '2' },
      { name: '학습  ', value: '3' },
      { name: '어학  ', value: '4' },
      { name: 'IT ', value: '5' },
      { name: '기타 ', value: '6' },
    ];
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            관심 주제 설정
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
<ButtonGroup>
{radios.map((radio, idx) => (
  <ToggleButton className="mb-2"
    key={idx}
    id={`radio-${idx}`}
    type="radio"
    variant="outline-primary"
    name="radio"
    value={radio.value}
    checked={radioValue === radio.value}
    onChange={(e) => {setRadioValue(e.currentTarget.value);setName(radio.name);}}
    
  >
    {radio.name}
  </ToggleButton>
))}
</ButtonGroup>
        </Modal.Body>
        
      </Modal>
    );
  }
 