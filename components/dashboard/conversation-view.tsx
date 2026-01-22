"use client"

import React from "react"

import { useState } from "react"
import {
  Star,
  MoreHorizontal,
  FolderOpen,
  RefreshCw,
  UserCircle,
  Link2,
  ChevronDown,
  Zap,
  MessageSquare,
  Send,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Conversation } from "@/lib/conversations-data"

interface ConversationViewProps {
  conversation: Conversation
  onSendMessage: (content: string) => void
}

export function ConversationView({ conversation, onSendMessage }: ConversationViewProps) {
  const [messageInput, setMessageInput] = useState("")

  const handleSend = () => {
    if (messageInput.trim()) {
      onSendMessage(messageInput.trim())
      setMessageInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-1 flex-col bg-[#1e2126]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#2a2d31] px-4 py-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-blue-400" />
          <span className="text-sm font-semibold text-white">{conversation.type}</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:bg-[#2a2d31] hover:text-white">
            <Star className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:bg-[#2a2d31] hover:text-white">
            <MoreHorizontal className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:bg-[#2a2d31] hover:text-white">
            <FolderOpen className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:bg-[#2a2d31] hover:text-white">
            <RefreshCw className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded bg-teal-500 text-white hover:bg-teal-600">
            <UserCircle className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Link icon */}
        <div className="mb-4">
          <Link2 className="h-5 w-5 text-gray-500" />
        </div>

        {/* Illustration - only show for demo messenger */}
        {conversation.id === "messenger" && (
          <div className="mb-6 flex justify-center">
            <div className="relative h-40 w-64">
              {/* Central inbox icon */}
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-[#2a2d31]">
                <div className="flex h-10 w-10 items-center justify-center rounded border-2 border-dashed border-gray-500">
                  <span className="text-xs text-gray-400">Inbox</span>
                </div>
              </div>
              {/* Surrounding icons */}
              <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                <UserCircle className="h-5 w-5 text-white" />
              </div>
              <div className="absolute left-16 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <div className="absolute right-16 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-teal-400">
                <UserCircle className="h-5 w-5 text-white" />
              </div>
              <div className="absolute right-4 top-8 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <div className="absolute bottom-8 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div className="absolute bottom-4 left-16 flex h-8 w-8 items-center justify-center rounded-full bg-green-400">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <div className="absolute bottom-0 right-16 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="space-y-4">
          {conversation.messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start gap-3",
                message.sender === "agent" && "flex-row-reverse"
              )}
            >
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white",
                  message.sender === "user" ? conversation.avatarBg : "bg-teal-500"
                )}
              >
                {message.sender === "user" ? conversation.avatar : "A"}
              </div>
              <div
                className={cn(
                  "max-w-md rounded-lg px-4 py-3",
                  message.sender === "user"
                    ? "bg-[#2a2d31] text-gray-300"
                    : "bg-blue-600 text-white"
                )}
              >
                <p className="text-sm">{message.content}</p>
                <span className="mt-1 block text-xs opacity-60">{message.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action card for messenger demo */}
        {conversation.id === "messenger" && (
          <div className="mt-6 flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
              M
            </div>
            <div className="rounded-lg bg-[#2a2d31] px-4 py-3">
              <a
                href="#"
                className="mb-1 block text-sm font-medium text-blue-400 hover:underline"
              >
                Install Messenger
              </a>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MessageSquare className="h-3 w-3" />
                <span>6m</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reply area */}
      <div className="border-t border-[#2a2d31] p-4">
        <div className="rounded-lg bg-[#2a2d31] p-3">
          <div className="mb-2 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-300">Reply</span>
            <ChevronDown className="h-3 w-3 text-gray-400" />
          </div>
          <textarea
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message... (Press Enter to send)"
            className="w-full resize-none bg-transparent text-sm text-gray-200 placeholder-gray-500 outline-none"
            rows={2}
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button className="flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:bg-[#2a2d31] hover:text-white">
            <Zap className="h-4 w-4" />
          </button>
          <button
            onClick={handleSend}
            disabled={!messageInput.trim()}
            className={cn(
              "flex items-center gap-2 rounded px-3 py-1.5 text-sm transition-colors",
              messageInput.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-[#2a2d31] text-gray-400"
            )}
          >
            <span>Send</span>
            <Send className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  )
}
