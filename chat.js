//! chat.js
//! version : 2.29.0
//! authors : Sunil, chat.js contributors
//! license : free
//! chat.com
const Title="Chat Application";

const USER1_JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDEwMTkzODAsImp0aSI6ImNkYmZmMTIwLWZmMDEtMTFlYS04N2U0LTQ5MGNhZDAyNDAxYyIsImV4cCI6MTYwMTQ1MTM0NywiYWNsIjoiJ3twYXRoczp7LyovdXNlcnMvKio6e30sLyovY29udmVyc2F0aW9ucy8qKjp7fSwvKi9zZXNzaW9ucy8qKjp7fSwvKi9kZXZpY2VzLyoqOnt9LC8qL2ltYWdlLyoqOnt9LC8qL21lZGlhLyoqOnt9LC8qL2FwcGxpY2F0aW9ucy8qKjp7fSwvKi9wdXNoLyoqOnt9LC8qL2tub2NraW5nLyoqOnt9fX0nIiwiYXBwbGljYXRpb25faWQiOiI5OTVkODYyYy1lMDQwLTRmMjAtODdhOC1iZGVhMDNkZGMyNDIiLCJzdWIiOiJGSVJTVF9VU0VSIn0.qGAfPYQs8rG6x0mErtisnWCMuRn16DP5NhhhDULSknKw1BUkxYpWYXvZWhVtcs_cGUqxuCPyKd5lAu1D-sQFn1gHTG0aSGrCbw_444vAh5i5CbpbbFDq11GyiYPH4ckTKZ_DgN93IvU7dMt7rTX4Dpn0LY_NVNSljy24P-d3PH_HKEO-nT7LoMy-JDwOoBNzAq2TYKDXEhzkRfTXcxI2qWGRfjQNXDuUXHNb97ic1vM9bBe2kSMiKaHrcL1hnrDAowtn2APY2YXn_JMtpfq1zyefBpE_yvRl0mCyglcWVrwbpg6W2eqxY99VWYOW38GVIze2lbt3pyFFjNgYKdYsDw';
const USER2_JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDEwMTk0MzcsImp0aSI6ImVmZmFlOTcwLWZmMDEtMTFlYS04ZDNjLTA3ZWQ1Y2E0NmEzMyIsImV4cCI6MTYwMTQ1MTM0NywiYWNsIjoiJ3twYXRoczp7LyovdXNlcnMvKio6e30sLyovY29udmVyc2F0aW9ucy8qKjp7fSwvKi9zZXNzaW9ucy8qKjp7fSwvKi9kZXZpY2VzLyoqOnt9LC8qL2ltYWdlLyoqOnt9LC8qL21lZGlhLyoqOnt9LC8qL2FwcGxpY2F0aW9ucy8qKjp7fSwvKi9wdXNoLyoqOnt9LC8qL2tub2NraW5nLyoqOnt9fX0nIiwiYXBwbGljYXRpb25faWQiOiI5OTVkODYyYy1lMDQwLTRmMjAtODdhOC1iZGVhMDNkZGMyNDIiLCJzdWIiOiJTRUNPTkRfVVNFUiJ9.JY4Lfofu6eWEwGzmrqpfaTVqKCtzwpfAgkXhHjFObb94T8jbK2bEGW6hJKNbNgKQXIw7d6Ux7dDpi9IemgWJaNdN2WXKJcs7v_WsM6-XVVntfWO_4phpxllVEyBikRuqhj76bbxDGoEbpYASXc1Dt8tIhzWDv4S4WTfW-RWA3bLF5aIH_oqBsEx_9rt2YOIHlP1sUw-erzUCClPgDoyNJSz3s7vI-2E20x-MzSjdzgOqek4QVuqJjjQzIJ0LU1UDBVazTZ7OHI4muxOZgFbQA3izWJ-ZRo3qqr2KclaIbSB5NJyrjU1uIlkunppfUmPPLRZpT34FPijYB3faWHRIfQ';
const CONVERSATION_ID = 'CON-aabd4a96-6eac-4250-8372-ab758b98e6ba';


const messageTextarea = document.getElementById('messageTextarea');
const messageFeed = document.getElementById('messageFeed');
const sendButton = document.getElementById('send');
const loginForm = document.getElementById('login');
const status = document.getElementById('status');

const loadMessagesButton = document.getElementById('loadMessages');
const messagesCountSpan = document.getElementById('messagesCount');
const messageDateSpan = document.getElementById('messageDate');

let conversation;
let listedEvents;
let messagesCount = 0;
let messageDate;

function authenticate(username) {
try{
  if (username == "FIRST_USER") {
    return USER1_JWT;
  }
  if (username == "SECOND_USER") {
    return USER2_JWT;
  }
}catch(e)
{
	alert("Error : Authenticate " + e);
}
  alert("User not recognized");
}

async function run(userToken) {
  let client = new NexmoClient({ debug: true });
  let app = await client.login(userToken);
  conversation = await app.getConversation(CONVERSATION_ID);
}

function listMessages(events) {
  let messages = '';

  // If there is a next page, display the Load Previous Messages button
  if (events.hasNext()){
    loadMessagesButton.style.display = "block";
  } else {
    loadMessagesButton.style.display = "none";
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

