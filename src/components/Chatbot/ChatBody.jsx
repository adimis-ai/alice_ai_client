import React, { useRef, useState, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

const ChatBody = ({ chat }) => {

  const aiStyle = "border-[#999999] break-words border-2 text-gray-100 rounded-xl self-end bg-gray-900/80 shadow-xl shadow-blue-300/10 mr-auto"

  const parent = useRef(null);
  const bottomRef = useRef(null);

  // only for auto animations
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  //for scrolling bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: "smooth"})
  }, [chat]);

  return (
    <div className="flex flex-col gap-5" ref={parent}>
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`border-[#999999] break-words border-2 rounded-xl text-gray-100 bg-black/40 shadow-xl shadow-blue-300/10 self-end px-3 py-6 max-w-[80%] ${
              message.sender === "A: " && aiStyle
            }`}
          >
            <pre className="whitespace-pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}

      <div ref={bottomRef} className="h-3"></div>
    </div>
  );
};

export default ChatBody;
