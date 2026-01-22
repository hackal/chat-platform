"use client"

import {
  Plus,
  Search,
  Inbox,
  AtSign,
  User,
  Users,
  CircleDot,
  AlertCircle,
  BarChart3,
  Sparkles,
  MessageSquare,
  CheckCircle,
  ArrowUpRight,
  Clock,
  ChevronRight,
  ChevronDown,
  MessagesSquare,
  Mail,
  Phone,
  Ticket,
} from "lucide-react"
import { cn } from "@/lib/utils"

const inboxItems = [
  { icon: Inbox, label: "Your inbox", count: 4, active: true },
  { icon: AtSign, label: "Mentions", count: 0 },
  { icon: User, label: "Created by you", count: 0 },
  { icon: Users, label: "All", count: 4 },
  { icon: CircleDot, label: "Unassigned", count: 0 },
  { icon: AlertCircle, label: "Spam", count: 0 },
  { icon: BarChart3, label: "Dashboard" },
]

const finAgentItems = [
  { icon: MessageSquare, label: "All conversations" },
  { icon: CheckCircle, label: "Resolved" },
  { icon: ArrowUpRight, label: "Escalated & Handoff" },
  { icon: Clock, label: "Pending" },
]

const viewItems = [
  { icon: MessagesSquare, label: "Messenger", count: 1, color: "text-blue-400" },
  { icon: Mail, label: "Email", count: 1, color: "text-purple-400" },
  { label: "WhatsApp & Social", count: 1, emoji: "👋" },
  { icon: Phone, label: "Phone & SMS", count: 1, color: "text-indigo-400" },
  { icon: Ticket, label: "Tickets", count: 0, color: "text-red-400" },
]

export function InboxSidebar() {
  return (
    <div className="flex w-52 flex-col border-r border-[#2a2d31] bg-[#1a1d21]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#2a2d31] px-3 py-3">
        <span className="text-sm font-semibold text-white">Inbox</span>
        <button className="flex h-6 w-6 items-center justify-center rounded text-gray-400 hover:bg-[#2a2d31] hover:text-white">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-2">
        {/* Search */}
        <button className="mb-2 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-400 hover:bg-[#2a2d31]">
          <Search className="h-4 w-4" />
          <span>Search</span>
        </button>

        {/* Inbox items */}
        <div className="space-y-0.5">
          {inboxItems.map((item, index) => (
            <button
              key={index}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-[#2a2d31]",
                item.active ? "bg-[#2a2d31] text-white" : "text-gray-400"
              )}
            >
              <div className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </div>
              {item.count !== undefined && (
                <span className="text-xs text-gray-500">{item.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* Fin AI Agent */}
        <div className="mt-4">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Sparkles className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium text-white">Fin AI Agent</span>
            <Plus className="ml-auto h-3.5 w-3.5 text-gray-500" />
          </div>
          <div className="ml-2 space-y-0.5">
            {finAgentItems.map((item, index) => (
              <button
                key={index}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-400 hover:bg-[#2a2d31]"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Team inboxes */}
        <div className="mt-4">
          <button className="flex w-full items-center justify-between px-2 py-1.5 text-sm text-gray-400 hover:text-white">
            <span className="font-medium">Team inboxes</span>
            <div className="flex items-center gap-1">
              <Plus className="h-3.5 w-3.5" />
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>

        {/* Teammates */}
        <div className="mt-1">
          <button className="flex w-full items-center justify-between px-2 py-1.5 text-sm text-gray-400 hover:text-white">
            <span className="font-medium">Teammates</span>
            <div className="flex items-center gap-1">
              <Plus className="h-3.5 w-3.5" />
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>

        {/* Views */}
        <div className="mt-4">
          <button className="flex w-full items-center justify-between px-2 py-1.5 text-sm text-gray-400 hover:text-white">
            <span className="font-medium">Views</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <div className="mt-1 space-y-0.5">
            {viewItems.map((item, index) => (
              <button
                key={index}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm text-gray-400 hover:bg-[#2a2d31]"
              >
                <div className="flex items-center gap-2">
                  {item.emoji ? (
                    <span className="text-sm">{item.emoji}</span>
                  ) : (
                    item.icon && <item.icon className={cn("h-4 w-4", item.color)} />
                  )}
                  <span>{item.label}</span>
                </div>
                <span className="text-xs text-gray-500">{item.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
