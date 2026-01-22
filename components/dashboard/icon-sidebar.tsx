"use client"

import {
  LayoutGrid,
  BarChart3,
  Sparkles,
  FileText,
  BarChart2,
  Send,
  Users,
  Search,
  Settings,
  User,
  List,
} from "lucide-react"
import { cn } from "@/lib/utils"

const topIcons = [
  { icon: LayoutGrid, active: true },
  { icon: BarChart3 },
  { icon: Sparkles },
  { icon: FileText },
  { icon: BarChart2 },
  { icon: Send },
  { icon: Users },
]

const bottomIcons = [
  { icon: Search },
  { icon: Settings },
  { icon: User },
]

export function IconSidebar() {
  return (
    <div className="flex w-12 flex-col items-center justify-between border-r border-[#2a2d31] bg-[#1a1d21] py-3">
      <div className="flex flex-col items-center gap-1">
        {topIcons.map((item, index) => (
          <button
            key={index}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-[#2a2d31] hover:text-gray-200",
              item.active && "bg-[#2a2d31] text-white"
            )}
          >
            <item.icon className="h-5 w-5" />
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center gap-1">
        {bottomIcons.map((item, index) => (
          <button
            key={index}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-[#2a2d31] hover:text-gray-200"
          >
            <item.icon className="h-5 w-5" />
          </button>
        ))}
        <button className="mt-2 flex items-center gap-1 text-xs text-gray-400 hover:text-gray-200">
          <List className="h-4 w-4" />
          <span>Manage</span>
        </button>
      </div>
    </div>
  )
}
