"use client"

import React from "react"

import {
  ExternalLink,
  Square,
  ChevronDown,
  ChevronUp,
  Plus,
  User,
  Users,
  Link2,
  MessageSquare,
  FileText,
  Tag,
  Layers,
  Eye,
  Grid3X3,
  Building,
} from "lucide-react"
import { useState } from "react"
import type { Conversation } from "@/lib/conversations-data"

interface CollapsibleSectionProps {
  icon: React.ReactNode
  title: string
  children?: React.ReactNode
  defaultOpen?: boolean
}

function CollapsibleSection({
  icon,
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-[#2a2d31]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-[#2a2d31]/50"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium text-white">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-400" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-400" />
        )}
      </button>
      {isOpen && children && <div className="px-4 pb-3">{children}</div>}
    </div>
  )
}

interface DetailsPanelProps {
  conversation: Conversation
}

export function DetailsPanel({ conversation }: DetailsPanelProps) {
  return (
    <div className="flex w-72 flex-col border-l border-[#2a2d31] bg-[#1a1d21]">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-[#2a2d31] px-4 py-2">
        <div className="flex">
          <button className="border-b-2 border-blue-500 px-3 py-2 text-sm font-medium text-white">
            Details
          </button>
          <button className="px-3 py-2 text-sm text-gray-400 hover:text-white">
            Copilot
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-7 w-7 items-center justify-center rounded text-gray-400 hover:bg-[#2a2d31] hover:text-white">
            <ExternalLink className="h-4 w-4" />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded text-gray-400 hover:bg-[#2a2d31] hover:text-white">
            <Square className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Assignee section */}
        <div className="border-b border-[#2a2d31] px-4 py-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs text-gray-500">Assignee</span>
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500">
                <User className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm text-white">Adam Pavlisin</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Team Inbox</span>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">Unassigned</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <CollapsibleSection
          icon={<Link2 className="h-4 w-4 text-gray-400" />}
          title="Links"
          defaultOpen={true}
        >
          <div className="space-y-2">
            {["Tracker ticket", "Back-office tickets", "Side conversations"].map(
              (item) => (
                <div key={item} className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{item}</span>
                  <Plus className="h-4 w-4 text-gray-500" />
                </div>
              )
            )}
          </div>
        </CollapsibleSection>

        {/* Conversation attributes */}
        <CollapsibleSection
          icon={<MessageSquare className="h-4 w-4 text-gray-400" />}
          title="Conversation attributes"
          defaultOpen={true}
        >
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">AI Title</span>
              <span className="text-gray-300">{conversation.aiTitle}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">ID</span>
              <span className="text-gray-300">{conversation.conversationId}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Company</span>
              <div className="flex items-center gap-1">
                <Building className="h-3 w-3 text-gray-400" />
                <span className="text-gray-300">{conversation.company}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Brand</span>
              <span className="text-gray-300">{conversation.brand}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">User</span>
              <span className="text-gray-300">{conversation.userName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Email</span>
              <span className="text-gray-300 text-xs">{conversation.userEmail}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Subject</span>
              <span className="text-blue-400">+ Add</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">CX Score rating</span>
              <span className="text-gray-500">—</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">CX Score explanation</span>
              <span className="text-gray-500">—</span>
            </div>
            <button className="mt-2 text-sm text-blue-400 hover:underline">
              See all
            </button>
          </div>
        </CollapsibleSection>

        {/* Topics */}
        <div className="border-b border-[#2a2d31] px-4 py-3">
          <span className="mb-2 block text-xs text-gray-500">Topics</span>
          <button className="flex h-6 w-6 items-center justify-center rounded border border-dashed border-gray-600 text-gray-500 hover:border-gray-400 hover:text-gray-400">
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Collapsible sections */}
        <CollapsibleSection
          icon={<User className="h-4 w-4 text-gray-400" />}
          title="User data"
        />
        <CollapsibleSection
          icon={<MessageSquare className="h-4 w-4 text-gray-400" />}
          title="Recent conversations"
        />
        <CollapsibleSection
          icon={<FileText className="h-4 w-4 text-gray-400" />}
          title="User notes"
        />
        <CollapsibleSection
          icon={<Tag className="h-4 w-4 text-gray-400" />}
          title="User tags"
        />
        <CollapsibleSection
          icon={<Layers className="h-4 w-4 text-gray-400" />}
          title="User segments"
        />
        <CollapsibleSection
          icon={<Eye className="h-4 w-4 text-gray-400" />}
          title="Recent page views"
        />
        <CollapsibleSection
          icon={<MessageSquare className="h-4 w-4 text-gray-400" />}
          title="Similar conversations"
        />

        {/* Edit apps */}
        <div className="px-4 py-3">
          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
            <Grid3X3 className="h-4 w-4" />
            <span>Edit apps</span>
          </button>
        </div>
      </div>

      {/* Chat widget button */}
      <div className="absolute bottom-4 right-4">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1d21] shadow-lg">
          <MessageSquare className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  )
}
