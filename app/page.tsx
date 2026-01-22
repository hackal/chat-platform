"use client"

import { useState } from "react"
import { IconSidebar } from "@/components/dashboard/icon-sidebar"
import { InboxSidebar } from "@/components/dashboard/inbox-sidebar"
import { ConversationList } from "@/components/dashboard/conversation-list"
import { ConversationView } from "@/components/dashboard/conversation-view"
import { DetailsPanel } from "@/components/dashboard/details-panel"
import { conversationsData, type Conversation, type Message } from "@/lib/conversations-data"

export default function Dashboard() {
  const [conversations, setConversations] = useState<Conversation[]>(conversationsData)
  const [selectedConversationId, setSelectedConversationId] = useState("messenger")

  const selectedConversation = conversations.find(c => c.id === selectedConversationId) || conversations[0]

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      sender: "agent",
      content,
      timestamp: "Just now"
    }

    setConversations(prev => 
      prev.map(conv => 
        conv.id === selectedConversationId
          ? { ...conv, messages: [...conv.messages, newMessage] }
          : conv
      )
    )
  }

  return (
    <div className="flex h-screen bg-[#1a1d21] text-gray-200">
      <IconSidebar />
      <InboxSidebar />
      <ConversationList 
        conversations={conversations}
        selectedConversationId={selectedConversationId}
        onSelectConversation={setSelectedConversationId}
      />
      <ConversationView 
        conversation={selectedConversation}
        onSendMessage={handleSendMessage}
      />
      <DetailsPanel conversation={selectedConversation} />
    </div>
  )
}
