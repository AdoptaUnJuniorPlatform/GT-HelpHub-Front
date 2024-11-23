import { useState } from "react";
import { useChatContext } from "../context/ChatContext";
import { userContacts } from "../Variables/varibles";
import InboxContact from "./InboxContact"
import InboxRequest from "./InboxRequest";
import InboxEmpty from "./InboxEmpty";

function InboxContacts() {
  const {openSms, openRequest} = useChatContext();
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="flex flex-col items-start h-3/4 gap-4 shrink-0 rounded-md border border-black-50 pt-10">
      <p className="text-xl text-neutral-black font-medium leading-6 tracking-wide flex-[1_0_0%] px-[27px]">{`${openRequest ? "Solicitud de mensaje" : "Chats"}`}</p>
      <div className="flex flex-col h-full w-full">
        {openSms ? (
          userContacts.length === 0 ? (
            <InboxEmpty />
          ) : (
            userContacts.map((contact) => (
              <InboxContact
                key={contact.id}
                id={contact.id}
                src={contact.src}
                message={contact.message}
                name={contact.name}
                selected={selected}
                setSelected={setSelected}
              />
            ))
          )
        ) : (
          <InboxRequest />
        )}
      </div>
    </div>
  );
}

export default InboxContacts