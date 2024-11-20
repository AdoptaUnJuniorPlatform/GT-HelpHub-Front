import InboxContact from "./InboxContact"

function InboxContacts() {
  return (
    <div className="flex flex-col items-start h-3/4 gap-4 shrink-0 rounded-md border border-black-50 pt-10">
      <p className="text-xl text-neutral-black font-medium leading-6 tracking-wide flex-[1_0_0%] px-[27px]">Chats</p>
      <div className="flex h-full w-full">
        <InboxContact />
      </div>
    </div>
  )
}

export default InboxContacts