
export type User={
    firstName: string
    lastName: string
    phoneNumber: string
    avatar: string
    id: number
}
export type Conversations ={
    userId: number
    participantId: number
    id: number
}
export type Messages={
    userId: number,
    messageText: string,
    conversationId: number,
    id: number
}
export type CurrentConversation={
    userId: number,
    participantId: number,
    id: number,
    messages: Messages[]
}
export type typeOfForm=HTMLFormElement &{
    text: HTMLInputElement
    reset: () => void
}
