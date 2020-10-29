import React from "react";

import Button from "./Button.js";
import KeypadRow from "./KeypadRow.js";
import LargeButton from "./LargeButton.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const Keypad = (props) => (
  <section className="keypad">
    <KeypadRow>
      <LargeButton onButtonPress={props.onButtonPress}>C</LargeButton>
      <LargeButton onButtonPress={props.onButtonPress}>CE</LargeButton>
      <LargeButton onButtonPress={props.onButtonPress}>
        <FontAwesomeIcon icon={faBackspace} />
      </LargeButton>
      <LargeButton onButtonPress={props.onButtonPress}>%</LargeButton>
    </KeypadRow>

    <KeypadRow>
      <Button onButtonPress={props.onButtonPress}>9</Button>
      <Button onButtonPress={props.onButtonPress}>8</Button>
      <Button onButtonPress={props.onButtonPress}>7</Button>
      <LargeButton onButtonPress={props.onButtonPress}>/</LargeButton>
    </KeypadRow>

    <KeypadRow>
      <Button onButtonPress={props.onButtonPress}>6</Button>
      <Button onButtonPress={props.onButtonPress}>5</Button>
      <Button onButtonPress={props.onButtonPress}>4</Button>
      <LargeButton onButtonPress={props.onButtonPress}>*</LargeButton>
    </KeypadRow>

    <KeypadRow>
      <Button onButtonPress={props.onButtonPress}>3</Button>
      <Button onButtonPress={props.onButtonPress}>2</Button>
      <Button onButtonPress={props.onButtonPress}>1</Button>
      <LargeButton onButtonPress={props.onButtonPress}>-</LargeButton>
    </KeypadRow>

    <KeypadRow>
      <Button onButtonPress={props.onButtonPress}>0</Button>
      <Button onButtonPress={props.onButtonPress}>.</Button>
      <LargeButton onButtonPress={props.onButtonPress}>=</LargeButton>
      <LargeButton onButtonPress={props.onButtonPress}>+</LargeButton>
    </KeypadRow>
  </section>
);

export default Keypad;
