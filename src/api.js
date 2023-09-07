const API_BASE_URL = "http://127.0.0.1:8000/chatbot";
const REQUEST_HEADERS = {
  Origin: "https://alice-ai.netlify.app",
  "Access-Control-Allow-Credentials": "True",
  "Content-Type": "application/json",
};

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data.message.replace(/^\n\n/, "");
}

async function fetchData(url, bodyData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(bodyData),
      headers: REQUEST_HEADERS,
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("An error occurred:", error);
    return `Following error occurred: ${error.message}`;
  }
}

export async function fetchResponse(...params) {
  const [chat, persona, userName, userEmail, task, external_data, ...rest] = params;

  const conversation = chat.map((message) => message.message).join(" \n ");
  const requestData = {
    user_phone_number_Value: rest[0],
    user_nickname_Value: rest[1],
    user_middle_name_Value: rest[2],
    userAddressValue: rest[3],
    userBirthdateValue: rest[4],
    user_family_name_Value: rest[5],
    usergenderValue: rest[6],
    user_given_name_value: rest[7],
    user_locale_Value: rest[8],
    persona,
    userName,
    userEmail,
    task,
    external_data,
    conversation,
    query: rest[9],
    instructions: rest[10],
    user_email_verified_Value: rest[11],
    memory_use: rest[12],
    latest_data: rest[13],
  };

  return await fetchData(API_BASE_URL, requestData);
}

export async function davinci(prompt) {
  const requestData = { prompt };
  return await fetchData(API_BASE_URL, requestData);
}
