import React from 'react'
import { useState } from "react";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import { useMutation } from "react-query";
import { fetchResponse } from "../../api";
import Header from "../Common/Header"
import { useAuth0 } from "@auth0/auth0-react";

const ChatScreen = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
      return <div>Loading ...</div>;
    }

    const [chat, setChat] = useState([]);
    const [persona, setPersona] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [task, setTask] = useState("");
    const [external_data, setExternalData] = useState("");
    const [query, setQuery] = useState("");
    const [instructions, setInstructions] = useState("");

    const [user_phone_number_Value, set_user_phone_number_Value] = useState("");
    const [user_nickname_Value, set_user_nickname_Value] = useState("");
    const [user_middle_name_Value, set_user_middle_name_Value] = useState("");
    const [userAddressValue, set_userAddressValue] = useState("");
    const [userBirthdateValue, set_userBirthdateValue] = useState("");
    const [user_family_name_Value, set_user_family_name_Value] = useState("");
    const [user_email_verified_Value, set_user_email_verified_Value] = useState("");
    const [usergenderValue, set_usergenderValue] = useState("");
    const [user_given_name_value, set_user_given_name_value] = useState("");
    const [user_locale_Value, set_user_locale_Value] = useState("");

    const [memory_use, setMemory] = useState(true);
    const [latest_data, setLatestData] = useState(false);

    const updateState = (user_phone_number_Value,user_nickname_Value,user_middle_name_Value,userAddressValue,userBirthdateValue,user_family_name_Value,user_email_verified_Value,usergenderValue,user_given_name_value,user_locale_Value, personaValue, userNameValue, userEmailValue, taskValue, externalDataValue, queryValue, instructionsValue, memoryUseValue, latestDataValue) => {
      setPersona(personaValue);
      setUserName(userNameValue);
      setUserEmail(userEmailValue);
      setTask(taskValue);
      setExternalData(externalDataValue);
      setQuery(queryValue);
      setInstructions(instructionsValue);
      setMemory(memoryUseValue);
      setLatestData(latestDataValue);
      set_user_phone_number_Value(user_phone_number_Value);
      set_user_nickname_Value(user_nickname_Value);
      set_user_middle_name_Value(user_middle_name_Value);
      set_userAddressValue(userAddressValue);
      set_userBirthdateValue(userBirthdateValue);
      set_user_family_name_Value(user_family_name_Value);
      set_user_email_verified_Value(user_email_verified_Value);
      set_usergenderValue(usergenderValue);
      set_user_given_name_value(user_given_name_value);
      set_user_locale_Value(user_locale_Value);
    };

    
    const mutation = useMutation({
      mutationFn: () => {
        return fetchResponse(user_phone_number_Value,user_nickname_Value,user_middle_name_Value,userAddressValue,userBirthdateValue,user_family_name_Value,user_email_verified_Value,usergenderValue,user_given_name_value,user_locale_Value,persona,userName,userEmail,task,external_data,chat,query,instructions,memory_use,latest_data)
      },
      onSuccess: (msg) =>
        setChat((prev) => [
          ...prev,
          { sender: "A: ", message: msg },
        ]),
    });    
  
    const sendMessage = async (message) => {
      await Promise.resolve(setChat((prev) => [...prev, message]));
      mutation.mutate();
    };  

    return (
      isAuthenticated && (
        <div>
            <div className="bg-[#1A232E] h-screen py-10 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between  align-middle">
              {/* gradients */}
                <div className="gradient-01 z-0 absolute"></div>
                <div className="gradient-02 z-0 absolute"></div>
                {/* header */}
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
                    <div
                    className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative"
                    style={{
                        backgroundImage:
                        "url(https://3.bp.blogspot.com/-jpu8UGjJiaw/Xqi6qD09yyI/AAAAAAAAOi4/v_geG2os4sYGigNUSjNMf7mpBKkXeko5gCLcBGAsYHQ/w1920-d/cyberpunk-wallpaper-hd.jpg)"
                    }}
                    >
                    </div>
                    <div
                    className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md">
                    <ChatBody chat={chat} />
                    </div>
            
                    <div className=" w-full max-w-4xl min-w-[20rem] self-center ">
                    <ChatInput 
                        sendMessage={sendMessage} 
                        loading={mutation.isLoading} 
                        updateState={updateState}
                    />
                    </div>
                </div>
          </div>
        </div>
      )
    )
}
export default ChatScreen