"use client";

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function MyNav() {
  return (
    <Navbar className="flex py-4 px-4">
      <NavbarContent className="flex justify-between w-full">
      <NavbarBrand className="flex items-center">
  <img
    src="/logo2.jpeg"
    alt="Logo"
    className="w-[60px] h-[60px] rounded-full mr-3" 
  />
  <p className="font-bold text-inherit">GuessIt</p>
</NavbarBrand>

        <NavbarContent className="flex justify-center gap-4">
          <NavbarItem>
            <Link color="foreground" href="#" className="p-4 rounded-xl hover:bg-violet-200">
              Como Funciona
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="p-4 rounded-xl hover:bg-violet-200">
              Quem somos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="p-4 rounded-xl hover:bg-violet-200">
              Integrações
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="flex justify-end gap-4">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Cadastro
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
