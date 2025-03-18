"use client"

import React from "react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Home, FileText, Users, Leaf, Phone, Image, Handshake } from "lucide-react"

export function RightSidebar() {
  return (
    <Sidebar side="right" className="border-none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2">Accès Jardin</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/" className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent">
                <Home className="h-4 w-4 mr-4 text-white" />
                Accueil
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/philosophie" className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent">
                <Leaf className="h-4 w-4 mr-4 text-white" />
                Notre Philosophie
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/services" className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent">
                <FileText className="h-4 w-4 mr-4 text-white" />
                Nos Services
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/equipe" className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent">
                <Users className="h-4 w-4 mr-4 text-white" />
                Notre Équipe
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/realisation" className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent">
                <Image className="h-4 w-4 mr-4 text-white" />
                Nos Réalisations
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/partenaires" className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent">
                <Handshake className="h-4 w-4 mr-4 text-white" />
                Nos Partenaires
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/contact" className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent">
                <Phone className="h-4 w-4 mr-4 text-white" />
                Contact
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 py-3">
        <p className="text-sm">© 2024 Accès Jardin</p>
      </SidebarFooter>
    </Sidebar>
  )
} 