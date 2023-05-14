'use client';
 
import { createContext, useContext, useState } from 'react';
 
const SidebarContext = createContext(null);
 
export function Sidebar() {
  const [isOpen, setIsOpen] = useState();
 
  return (
    <SidebarContext.Provider value={{ isOpen }}>
      <SidebarNav />
    </SidebarContext.Provider>
  );
}
 
export function SidebarNav() {
  let { isOpen } = useContext(SidebarContext);
 
  return (
    <div>
      <p>Home</p>
 
      {isOpen && <Sidebar />}
    </div>
  );
}