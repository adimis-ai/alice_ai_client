import React from "react";
import { useState, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ChatInput = ({ sendMessage, loading, updateState }) => {

  const { user } = useAuth0();
  const [value, setValue] = useState("");
  const [personaValue, setPersona] = useState("");
  const [taskValue, setTask] = useState("");
  const [externalDataValue, setExternal] = useState("");
  const [instructionsValue, setInstruction] = useState("");
  const [memoryUseValue, setMemory] = useState(true);
  const [latestDataValue, setLatestData] = useState(false);

  const textareaRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") return;

    const userNameValue = user.name
    const userEmailValue = user.email
    const userAddressValue = user.address = ""
    const userBirthdateValue = user.birthdate = ""
    const user_family_name_Value = user.family_name = ""
    const user_email_verified_Value = user.email_verified = false
    const usergenderValue = user.gender = ""
    const user_given_name_value = user.given_name = ""
    const user_locale_Value = user.locale = ""
    const user_middle_name_Value = user.middle_name = ""
    const user_nickname_Value = user.nickname = ""
    const user_phone_number_Value = user.phone_number = 0

    updateState(user_phone_number_Value,user_nickname_Value,user_middle_name_Value,userAddressValue,userBirthdateValue,user_family_name_Value,user_email_verified_Value,usergenderValue,user_given_name_value,user_locale_Value, personaValue, userNameValue, userEmailValue, taskValue, externalDataValue, value, instructionsValue, memoryUseValue, latestDataValue)

    sendMessage({ sender: "Q: ", message: value });
    setValue("");

  };

  const handleChange = (e) => {
    setValue(e.target.value);
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="full bg-gray-900 bg-opacity-10 max-h-80 rounded-xl shadow-xl shadow-blue-300/10 px-5 py-5 overflow-auto relative">
        {loading ? (
          <img src="./loader.gif" className="w-8 m-auto" />
        ) : (
          <>
              <div>
                <textarea
                  ref={textareaRef}
                  //onKeyDown={handleSubmit}
                  rows={1}
                  className="border-0 text-gray-100 bg-transparent outline-none resize h-7 w-11/12"
                  value={value}
                  type="text"
                  onChange={handleChange}
                />
                <div className="p-1">
                  <img
                    onClick={handleSubmit}
                    src="./send.png"
                    width={23}
                    alt="send-button"
                    className="absolute top-2.5 right-3 hover:cursor-pointer"
                  />
                  <label htmlFor="my-modal-3">
                    <img
                      src="./settings-1.png"
                      width={27}
                      alt="send-button"
                      className="absolute top-8 mt-2 right-3 hover:cursor-pointer"
                    />
                  </label>
                </div>
              </div>
          </>
        )}
      </div>
      <div className="">
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative bg-gray-800">
                <h1 className="text-xl font-bold mb-5">Prompt Settings</h1>
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                <div className="">
                  <h1 className="text-md font-bold teact-gray-100 mt-3">Personality: </h1>
                  <textarea onChange={(e) => setPersona(e.target.value)} value={personaValue} placeholder="Personality" className="textarea textarea-bordered textarea-xs w-full max-w-xs bg-gray-800 border border-white mt-2"></textarea>
                  <h1 className="text-md font-bold teact-gray-100 mt-3">Task: </h1>
                  <textarea onChange={(e) => setTask(e.target.value)} value={taskValue} placeholder="Task" className="textarea textarea-bordered textarea-xs w-full max-w-xs bg-gray-800 border border-white mt-2"></textarea>
                  <h1 className="text-md font-bold teact-gray-100 mt-3">External Data: </h1>
                  <textarea onChange={(e) => setExternal(e.target.value)} value={externalDataValue} placeholder="External Data" className="textarea textarea-bordered textarea-xs w-full max-w-xs bg-gray-800 border border-white mt-2"></textarea>
                  <h1 className="text-md font-bold teact-gray-100 mt-3">Instructions: </h1>
                  <textarea onChange={(e) => setInstruction(e.target.value)} value={instructionsValue} placeholder="Instructions" className="textarea textarea-bordered textarea-xs w-full max-w-xs bg-gray-800 border border-white mt-2"></textarea>
                </div>

                <div className="flex mt-7 gap-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      onChange={(e) => setMemory(e.target.checked)} 
                      checked={memoryUseValue} 
                      type="checkbox"  
                      className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-100">Memory</span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      onChange={(e) => setLatestData(e.target.checked)} 
                      checked={latestDataValue} 
                      type="checkbox" 
                      className="sr-only peer" 
                      disabled
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-100 ">Websearch</span>
                  </label>
                </div>

              </div>
            </div>
      </div>
    </div>
  );
};

export default ChatInput;