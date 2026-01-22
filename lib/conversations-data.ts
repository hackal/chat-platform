export interface Message {
  id: string
  sender: "user" | "agent"
  content: string
  timestamp: string
}

export interface Conversation {
  id: string
  type: string
  tag: string
  title: string
  time: string
  avatar: string
  avatarBg: string
  userName: string
  userEmail: string
  company: string
  brand: string
  aiTitle: string
  conversationId: string
  messages: Message[]
}

export const conversationsData: Conversation[] = [
  {
    id: "messenger",
    type: "Messenger",
    tag: "[Demo]",
    title: "Install Messenger",
    time: "6m",
    avatar: "M",
    avatarBg: "bg-blue-500",
    userName: "Adam Pavlisin",
    userEmail: "adam@modeinspect.com",
    company: "[Demo]",
    brand: "Modeinspect",
    aiTitle: "Messenger install",
    conversationId: "215472778475509",
    messages: [
      {
        id: "m1",
        sender: "user",
        content: "This is a demo message. It shows how a customer conversation from the Messenger will look in your Inbox. Conversations handled by Fin AI Agent will also appear here.",
        timestamp: "6m ago"
      },
      {
        id: "m2",
        sender: "user",
        content: "Once a channel is installed, all conversations come straight to your Inbox, so you can route them to the right team.",
        timestamp: "6m ago"
      }
    ]
  },
  {
    id: "whatsapp",
    type: "WhatsApp",
    tag: "[Demo]",
    title: "Set up WhatsApp or social channels",
    time: "6m",
    avatar: "W",
    avatarBg: "bg-green-500",
    userName: "Sarah Chen",
    userEmail: "sarah@techstartup.io",
    company: "TechStartup",
    brand: "TechStartup",
    aiTitle: "WhatsApp setup inquiry",
    conversationId: "215472778475510",
    messages: [
      {
        id: "w1",
        sender: "user",
        content: "Hi! I'd like to connect my WhatsApp Business account to receive customer messages here.",
        timestamp: "6m ago"
      },
      {
        id: "w2",
        sender: "agent",
        content: "Hello Sarah! I'd be happy to help you set up WhatsApp integration. First, you'll need to have a WhatsApp Business API account. Do you already have one?",
        timestamp: "5m ago"
      },
      {
        id: "w3",
        sender: "user",
        content: "Yes, I have a Business API account ready. What's the next step?",
        timestamp: "4m ago"
      }
    ]
  },
  {
    id: "email",
    type: "Email",
    tag: "[Demo]",
    title: "This is a demo email. It shows how em...",
    time: "6m",
    avatar: "E",
    avatarBg: "bg-yellow-500",
    userName: "Marcus Johnson",
    userEmail: "marcus@enterprise.co",
    company: "Enterprise Co",
    brand: "Enterprise",
    aiTitle: "Email forwarding setup",
    conversationId: "215472778475511",
    messages: [
      {
        id: "e1",
        sender: "user",
        content: "Hello, I'm trying to set up email forwarding from our support@enterprise.co address to this inbox. Can you help?",
        timestamp: "6m ago"
      },
      {
        id: "e2",
        sender: "agent",
        content: "Hi Marcus! Absolutely, I can guide you through the email forwarding setup. You'll need to add our forwarding address to your email provider's settings.",
        timestamp: "5m ago"
      }
    ]
  },
  {
    id: "phone",
    type: "Phone",
    tag: "[Demo]",
    title: "Set up phone or SMS",
    time: "6m",
    avatar: "P",
    avatarBg: "bg-purple-500",
    userName: "Emma Rodriguez",
    userEmail: "emma@callcenter.net",
    company: "CallCenter Pro",
    brand: "CallCenter Pro",
    aiTitle: "Phone channel setup",
    conversationId: "215472778475512",
    messages: [
      {
        id: "p1",
        sender: "user",
        content: "We need to integrate our phone system with the inbox. Is there documentation available?",
        timestamp: "6m ago"
      },
      {
        id: "p2",
        sender: "agent",
        content: "Hi Emma! Yes, we have comprehensive documentation for phone integration. You can connect via Twilio or our native phone solution.",
        timestamp: "5m ago"
      },
      {
        id: "p3",
        sender: "user",
        content: "We're already using Twilio. That would be perfect!",
        timestamp: "4m ago"
      },
      {
        id: "p4",
        sender: "agent",
        content: "Great choice! I'll send you the Twilio integration guide. You'll need your Account SID and Auth Token ready.",
        timestamp: "3m ago"
      }
    ]
  },
  {
    id: "billing",
    type: "Messenger",
    tag: "[Support]",
    title: "Billing question about pro plan",
    time: "12m",
    avatar: "J",
    avatarBg: "bg-rose-500",
    userName: "James Wilson",
    userEmail: "james@smallbiz.com",
    company: "SmallBiz LLC",
    brand: "SmallBiz",
    aiTitle: "Pro plan billing inquiry",
    conversationId: "215472778475513",
    messages: [
      {
        id: "b1",
        sender: "user",
        content: "Hi, I have a question about the Pro plan pricing. Is there a discount for annual billing?",
        timestamp: "12m ago"
      },
      {
        id: "b2",
        sender: "agent",
        content: "Hello James! Yes, we offer a 20% discount when you choose annual billing for the Pro plan. Would you like me to show you the comparison?",
        timestamp: "10m ago"
      },
      {
        id: "b3",
        sender: "user",
        content: "That would be great, thanks!",
        timestamp: "8m ago"
      }
    ]
  }
]
