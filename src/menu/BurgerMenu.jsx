import React from 'react';
import { TiThMenu } from "react-icons/ti";

export default function BurgerMenu({ open, setOpen }) {
  return (
    <div>
      <TiThMenu open={open} onClick={() => setOpen(!open)} />
    </div>
  )
}
