"use client"

import { Search, ChevronDown, Columns2, Columns3 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Conversation } from "@/lib/conversations-data"

interface ConversationListProps {
  conversations: Conversation[]
  selectedConversationId: string
  onSelectConversation: (id: string) => void
}

export function ConversationList({
  conversations,
  selectedConversationId,
  onSelectConversation,
}: ConversationListProps) {
  return (
    <div className="flex w-72 flex-col border-r border-[#2a2d31] bg-[#1a1d21]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#2a2d31] px-3 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-[#2a2d31]">
            <span className="text-xs text-white">◻</span>
          </div>
          <span className="text-sm font-semibold text-white">Adam Pavlisin</span>
        </div>
        <button className="flex h-7 w-7 items-center justify-center rounded text-gray-400 hover:bg-[#2a2d31] hover:text-white">
          <Search className="h-4 w-4" />
        </button>
      </div>

      {/* Filter bar */}
      <div className="flex items-center justify-between border-b border-[#2a2d31] px-3 py-2">
        <span className="rounded bg-[#2a2d31] px-2 py-0.5 text-xs font-medium text-white">
          {conversations.length} Open
        </span>
        <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-white">
          <span>Last activity</span>
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>

      {/* Conversation list */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
            className={cn(
              "flex w-full items-start gap-3 border-b border-[#2a2d31] px-3 py-3 text-left transition-colors hover:bg-[#2a2d31]",
              selectedConversationId === conversation.id && "bg-[#2a2d31]"
            )}
          >
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white",
                conversation.avatarBg
              )}
            >
              {conversation.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-white">
                  {conversation.type}
                </span>
                <span className="text-sm text-gray-500">·</span>
                <span className="text-sm text-gray-500">{conversation.tag}</span>
              </div>
              <p className="truncate text-sm text-gray-400">{conversation.title}</p>
            </div>
            <span className="shrink-0 text-xs text-gray-500">{conversation.time}</span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 border-t border-[#2a2d31] px-3 py-2">
        <button className="flex h-8 w-8 items-center justify-center rounded bg-[#2a2d31] text-gray-400 hover:text-white">
          <Columns2 className="h-4 w-4" />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:bg-[#2a2d31] hover:text-white">
          <Columns3 className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
