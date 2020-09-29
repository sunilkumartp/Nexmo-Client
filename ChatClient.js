//! chat.js
//! version : 2.29.0
//! authors : Sunil, chat.js contributors
//! license : free
//! chat.com
const Title="Chat Application";
//Using Admin Token
//const USER1_JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDEzMDE0NjEsImV4cCI6MTYwMTY4MzIwMCwiYXBwbGljYXRpb25faWQiOiI5OTVkODYyYy1lMDQwLTRmMjAtODdhOC1iZGVhMDNkZGMyNDIiLCJqdGkiOiJZZVYrSnc2cXhLQ2RablB5MjdNeEc4NlRaVlUrNDJ2c2pNSndIOUxwN1E2K002bk1JZWZ1c25sR09xOWltYnQrbFRlM0N2bVY1blgxOVlLa0hKTjVrdz09IiwiYWNsIjp7InBhdGhzIjp7Ii8qL3VzZXJzLyoqIjp7fSwiLyovY29udmVyc2F0aW9ucy8qKiI6e30sIi8qL3Nlc3Npb25zLyoqIjp7fSwiLyovZGV2aWNlcy8qKiI6e30sIi8qL2ltYWdlLyoqIjp7fSwiLyovbWVkaWEvKioiOnt9LCIvKi9hcHBsaWNhdGlvbnMvKioiOnt9LCIvKi9wdXNoLyoqIjp7fSwiLyova25vY2tpbmcvKioiOnt9fX19.cUHZkWco_0qh7T9G4U3n8qNnHoNhdK-fVwIwtuCDBkZgKLx_PH_EZ3kezE0mUnLgRq_3Tz8ozhLmm6CCzrmncJWGKXrmVCaZ6FwjwKDY8tk5lqFhM9SWuSfbBx_rESlHv661Q-6E9MdsKJ26rnISxrJ-J3FuM9PbrS84590psFxcqXhMvusT2IjDgT-nQCeuhnAN3SwjxOivZETGSlTCJw_6Rh77OkeKQWQ1isQ8oiMC6DzSS2EwOaSGCVMNHWK1t3MxRCpDeY8jR5wRtmbVD10R9UZPFnwHtq0_DXH-WbWGkj8luj99N0FdkHGGcT7w6CXZXp3XvfKqC6DHB4CAcg';
//const USER2_JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDEzMDE0NjEsImV4cCI6MTYwMTY4MzIwMCwiYXBwbGljYXRpb25faWQiOiI5OTVkODYyYy1lMDQwLTRmMjAtODdhOC1iZGVhMDNkZGMyNDIiLCJqdGkiOiJZZVYrSnc2cXhLQ2RablB5MjdNeEc4NlRaVlUrNDJ2c2pNSndIOUxwN1E2K002bk1JZWZ1c25sR09xOWltYnQrbFRlM0N2bVY1blgxOVlLa0hKTjVrdz09IiwiYWNsIjp7InBhdGhzIjp7Ii8qL3VzZXJzLyoqIjp7fSwiLyovY29udmVyc2F0aW9ucy8qKiI6e30sIi8qL3Nlc3Npb25zLyoqIjp7fSwiLyovZGV2aWNlcy8qKiI6e30sIi8qL2ltYWdlLyoqIjp7fSwiLyovbWVkaWEvKioiOnt9LCIvKi9hcHBsaWNhdGlvbnMvKioiOnt9LCIvKi9wdXNoLyoqIjp7fSwiLyova25vY2tpbmcvKioiOnt9fX19.cUHZkWco_0qh7T9G4U3n8qNnHoNhdK-fVwIwtuCDBkZgKLx_PH_EZ3kezE0mUnLgRq_3Tz8ozhLmm6CCzrmncJWGKXrmVCaZ6FwjwKDY8tk5lqFhM9SWuSfbBx_rESlHv661Q-6E9MdsKJ26rnISxrJ-J3FuM9PbrS84590psFxcqXhMvusT2IjDgT-nQCeuhnAN3SwjxOivZETGSlTCJw_6Rh77OkeKQWQ1isQ8oiMC6DzSS2EwOaSGCVMNHWK1t3MxRCpDeY8jR5wRtmbVD10R9UZPFnwHtq0_DXH-WbWGkj8luj99N0FdkHGGcT7w6CXZXp3XvfKqC6DHB4CAcg';

//Using Generated Token using Sub
const USER1_JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDEzNTU2MTYsImV4cCI6MTYwMTc2OTYwMCwiYXBwbGljYXRpb25faWQiOiI5OTVkODYyYy1lMDQwLTRmMjAtODdhOC1iZGVhMDNkZGMyNDIiLCJqdGkiOiJKeWo4ZnY1c2Ewc3B1Wk0wcXI2QWxYL3pvWEJWZTdPQWF5dVlRNFdPZDZmUVVkQ0tKaXd6aGROQmxEam5ET2dkVS9zaDhrYlNuR0FqTmlGN3U3MUs2UT09IiwiYWNsIjp7InBhdGhzIjp7Ii8qL3VzZXJzLyoqIjp7fSwiLyovY29udmVyc2F0aW9ucy8qKiI6e30sIi8qL3Nlc3Npb25zLyoqIjp7fSwiLyovZGV2aWNlcy8qKiI6e30sIi8qL2ltYWdlLyoqIjp7fSwiLyovbWVkaWEvKioiOnt9LCIvKi9hcHBsaWNhdGlvbnMvKioiOnt9LCIvKi9wdXNoLyoqIjp7fSwiLyova25vY2tpbmcvKioiOnt9fX0sInN1YiI6IlVTRVJfT05FIn0.q0L9JtgPtE9RQy0zsfx_wOMddA3j-maupZFF2mi2oD3x-IHXESoytruPurbFfwoJ1rjvn2ndN6Pe2e57Fqyptm756RgpPP74QcaTE4HlS-wHeVmNOwFL0eNWIULeLIbkZL9MWRVXWO5qA5JkF6SCHLlf8zhpnnRi5x7x4kC3FiQKHHqCF0VMChaIBP1rDzfrGiy0QJj-M6Dxlga9FHr_gBaJRQsdWBylZWonxGEyeH392G_UOLHgL9ByE4ohCixM8pyMk909o9vyKNn2DABzXVe0KpCKvBUCsWMOj9BUXly3ukii6d-edNgD522_z1Kw6-6mwrA3AdGnTs1HN9r1Mw';
const USER2_JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDEzNTU3MDIsImV4cCI6MTYwMTc2OTYwMCwiYXBwbGljYXRpb25faWQiOiI5OTVkODYyYy1lMDQwLTRmMjAtODdhOC1iZGVhMDNkZGMyNDIiLCJqdGkiOiJkQ254bWowaWhyejRESTBrMUs3SGRjRE5LYXd4eFcrS2Z3V0tDZ040clJUQm92ZzZ2WlFJQzhCaGptNXNzQXRWMWdMbmVWSEpsRlJyS1g0Ym9IV0FZUT09IiwiYWNsIjp7InBhdGhzIjp7Ii8qL3VzZXJzLyoqIjp7fSwiLyovY29udmVyc2F0aW9ucy8qKiI6e30sIi8qL3Nlc3Npb25zLyoqIjp7fSwiLyovZGV2aWNlcy8qKiI6e30sIi8qL2ltYWdlLyoqIjp7fSwiLyovbWVkaWEvKioiOnt9LCIvKi9hcHBsaWNhdGlvbnMvKioiOnt9LCIvKi9wdXNoLyoqIjp7fSwiLyova25vY2tpbmcvKioiOnt9fX0sInN1YiI6IlVTRVJfVFdPIn0.QroaTNSHvzDl7eehBLgIiv-FcO6dMdKmu30Ulq_ifrP90LM2SZP0LxwHy_r7pV-ElSnGy8KEGa_CP-p8XG96SxS6LD4RwEMV8hqYfzsE31YlTtb412ITb3ASYsDpCUfBdqzb-rU40vHvAhPHyQzujYmYFpQ8FrEfrF2XiTu1KptsWTTCf-vQVesmNcpflWsmhqSsJwoofbSGx-I4MEq1y-KGxMwDxI0zJpbFQJxk__q-6AlotC8O66ch_7oV2FnMuZ5jHPQUwtWa4osAkAf362EkheOEgEMQdGSrSyeAVK10lyqfi8yi8HLbp8UqocnmQKm_e1en6hiFYLfG75i_Rg';
const CONVERSATION_ID = 'CON-aabd4a96-6eac-4250-8372-ab758b98e6ba';


const messageTextarea = document.getElementById('messageTextarea');
const messageFeed = document.getElementById('messageFeed');
const sendButton = document.getElementById('send');
const loginForm = document.getElementById('login');
const status = document.getElementById('status');
const loadMessageButton = document.getElementById('loadMessages');
const messagesCountSpan = document.getElementById('messagesCount');
const messageDateSpan = document.getElementById('messageDate');
const loginFormObj=document.getElementById('login');
//const debugMsgObj = document.getElementById('debugMsg');

let conversation;
let listedEvents;
let messagesCount = 0;
let messageDate;

/// ***************************

// authenticate Function
  
/// ***************************

function authenticate(username) {
	//debugMsgObj.textContent=debugMsgObj.textContent+"<br> Event Fired";
try{
  if (username == "USER_ONE") {
    return USER1_JWT;
  }
  if (username == "USER_TWO") {
    return USER2_JWT;
  }
}catch(e)
{
	console.log("Error : Authenticate " + e);
}
  console.log("User not recognized");
}

 
/// ***************************

// Submit Event Listener
  
/// ***************************
 
	loginFormObj.addEventListener('submit', function(){
	try {
		 document.getElementById('messages').style.display = 'block';
		 document.getElementById('login').style.display = 'none';
	  } 
      catch ( e ) {
         console.log("LoginForm Submit "+e);
      }
	  console.log("Login Form Submit ");
	});

/// ***************************

// Submit Event Listener
  
/// ***************************

   loginForm.addEventListener('submit', (event) => {
  
    try {
		event.preventDefault();
		const userToken = authenticate(document.getElementById('username').value);
		
		if (userToken) {
				document.getElementById('messages').style.display = 'block';
				document.getElementById('login').style.display = 'none';
				run(userToken);
	}
	else{
				console.log("No Token " + userToken);
	}
  
  } 
      catch ( e ) {
         console.log("Error : Authenticate " + e);
      }
  
});

loadMessageButton.addEventListener('click', async (event) => {
	// Get next page of events
	//debugMsgObj.textContent=debugMsgObj.textContent+"<br> Event Fired";
	try {
	      let nextEvents = await listedEvents.getNext();
	      listMessages(nextEvents);
	  } 
      
      catch ( e ) {
         console.log("Error : Authenticate " + e);
      }
	});


  // Listen for clicks on the submit button and send the existing text value
	sendButton.addEventListener('click', async () => {
	//debugMsgObj.textContent=debugMsgObj.textContent+"<br> Event Fired";	
	try{
		await conversation.sendText(messageTextarea.value);
		messageTextarea.value = '';
	}catch(e){
		console.log("Error : sendButton Click " + e);
    }	
  });
  

async function run(userToken){
try{
	//debugMsgObj.textContent=userToken;
	console.log(userToken);
  let client = new NexmoClient({ debug: true });
  let app = await client.login(userToken);
  conversation = await app.getConversation(CONVERSATION_ID);
  
  
  // Load events that happened before the page loaded
 
 
    let initialEvents = await conversation.getEvents({ event_type: "text", page_size: 10, order:"desc" });
    listMessages(initialEvents);
   // Update the UI to show which user we are
  document.getElementById('sessionName').innerHTML = conversation.name; //conversation.me.user.name + "'s messages"
   
   
   // Any time there's a new text event, add it as a message
	conversation.on('text', (sender, event) => {
	try{
		const formattedMessage = formatMessage(sender, event, conversation.me);
		messageFeed.innerHTML = messageFeed.innerHTML +  formattedMessage;
		messagesCountSpan.textContent = `${messagesCount}`;
	}catch(e){
		console.log("Error : Conversation On " + e);
    }
  });
  
  
  messageTextarea.addEventListener('keypress', (event) => {
	conversation.startTyping();
	console.log("Start Typing....");
  });

	var timeout = null;
	
	messageTextarea.addEventListener('keyup', (event) => {
	  clearTimeout(timeout);
	  timeout = setTimeout(() => {
		conversation.stopTyping();
		console.log("Stop Typing....");
	  }, 500);
	});


	conversation.on("text:typing:on", (data) => {
	  if (data.user.id !== data.conversation.me.user.id) {
		status.innerHTML = data.user.name + " is typing...";
	  }
	});

	conversation.on("text:typing:off", (data) => {
	  status.innerHTML = "";
	});

  
  }catch(e){
   console.log("******* Error Generated : Run " + e);
  }
}


  
	


function listMessages(events) {
  let messages = '';

  // If there is a next page, display the Load Previous Messages button
  if (events.hasNext()){
    loadMessageButton.style.display = "block";
  } else {
    loadMessageButton.style.display = "none";
  }

  // Replace current with new page of events
  listedEvents = events;

  events.items.forEach(event => {
    const formattedMessage = formatMessage(conversation.members.get(event.from), event, conversation.me);
    messages = formattedMessage + messages;
  });

  // Update UI
  messageFeed.innerHTML = messages + messageFeed.innerHTML;
  messagesCountSpan.textContent = `${messagesCount}`;
  messageDateSpan.textContent = messageDate;
}


function formatMessage(sender, message, me) {
  const rawDate = new Date(Date.parse(message.timestamp));
  const formattedDate = moment(rawDate).calendar();
  let text = '';
  messagesCount++;
  messageDate = formattedDate;

  if (message.from !== me.id) {
    text = `<span style="color:red">${sender.user.name} (${formattedDate}): <b>${message.body.text}</b></span>`;
  } else {
    text = `me (${formattedDate}): <b>${message.body.text}</b>`;
  }

  return text + '<br />';

}


