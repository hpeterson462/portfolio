import React, { useState, useRef } from 'react';
import BurgerMenu from './BurgerMenu';
import Menu from './Menu';
import { useOnClickOutside } from '../hooks/SidebarHook';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <div ref={node}>
        <BurgerMenu />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
