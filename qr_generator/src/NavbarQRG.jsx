"use client";

import { Button, Navbar } from "flowbite-react";

export function NavbarQRG() {
  return (
    <Navbar className="bg-gray-950 fixed top-0 w-full z-50" fluid>
      <Navbar.Brand href="https://flowbite-react.com">
        <svg className="w-6 h-6 text-gray-400 dark:text-white inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z" />
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z" />
        </svg>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className=" bg-blue-600 hover:bg-amber-600">
          Prueba la version PRO</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-gray-300 active:text-[#59ae27]" href="#">
          <svg className="w-6 h-6 text-gray-400 dark:text-white inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z" />
            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z" />
          </svg>
          QR Generator
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}