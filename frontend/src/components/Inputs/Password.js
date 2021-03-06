import React from "react";
import {Labelled} from "../decorators/Labelled";
import {Input} from "../Form/Input";

export const Password = (props) => <Labelled label="password">
  <Input
    name="pass"
    placeholder="add password"
    type="password"
    autoComplete="off"
    onChange={props.onChange}
    value={props.value}
    id={props.id} />
</Labelled>