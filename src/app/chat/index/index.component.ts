import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { chat, groups } from './data';
import { Chats, Groups } from './chat.model';

import { Lightbox } from 'ngx-lightbox';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../core/services/authfake.service';

// Date Format
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

/**
 * Chat-component
 */
export class IndexComponent implements OnInit {
  activetab = 2;
  chat: Chats[];
  groups: Groups[];
  formData!: FormGroup;
  @ViewChild('scrollRef') scrollRef: any;
  emoji = '';
  isreplyMessage = false;
  isgroupMessage = false;
  mode: string | undefined;
  public isCollapsed = true;

  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
    { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
    { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
    { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
    { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
  ];

  lang: string;
  images: { src: string; thumb: string; caption: string }[] = [];

  constructor(private authFackservice: AuthfakeauthenticationService, private authService: AuthenticationService,
    private router: Router, public translate: TranslateService, private modalService: NgbModal, private offcanvasService: NgbOffcanvas,
    public formBuilder: FormBuilder, private datePipe: DatePipe, private lightbox: Lightbox) { }

  /**
  * Open lightbox
  */
  openImage(index: number, i: number): void {
    // open lightbox
    this.lightbox.open(this.message[index].imageContent, i, {
      showZoom: true
    });

  }

  senderName: any;
senderProfile: any;
  
ngOnInit(): void {
  document.body.setAttribute('data-bs-theme', 'light');

  // Validation
  this.formData = this.formBuilder.group({
    message: ['', [Validators.required]],
  });

  const user = window.sessionStorage.getItem('currentUser');
  if (user) {
    this.senderName = JSON.parse(user).username
    this.senderProfile = 'assets/images/users/' + JSON.parse(user).profile
  } else {
    this.router.navigate(['/account/login']);
  }
  this.chat = chat;
  this.groups = groups;
  this.lang = this.translate.currentLang;
  this.onListScroll();
}

ngAfterViewInit() {
  this.scrollRef.SimpleBar.getScrollElement().scrollTop = 100;
}

customOptions: any = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['Previous', 'Next'],
  margin: 20, // Adjust the margin to control spacing between slides
  items: 4
};

/**
 * Show user profile
 */
// tslint:disable-next-line: typedef
showUserProfile() {
  document.getElementById('profile-detail').style.display = 'block';
}

/**
 * Close user chat
 */
// tslint:disable-next-line: typedef
closeUserChat() {
  document.getElementById('chat-room').classList.remove('user-chat-show');
}

/**
 * Logout the user
 */
logout() {
  if (environment.defaultauth === 'firebase') {
    this.authService.logout();
  } else if (environment.defaultauth === 'fackbackend') {
    this.authFackservice.logout();
  }
  this.router.navigate(['/account/login']);
}

/**
 * Set language
 * @param lang language
 */
setLanguage(lang) {
  this.translate.use(lang);
  this.lang = lang;
}

openCallModal(content) {
  this.modalService.open(content, { centered: true });
}

openVideoModal(videoContent) {
  this.modalService.open(videoContent, { centered: true });
}

/**
 * Show user chat
 */
// tslint:disable-next-line: typedef
userName: any = 'Doris Brown';
userStatus: any = 'online';
userProfile: any = 'assets/images/users/avatar-4.jpg';
message: any;
showChat(event: any, id: any) {
  var removeClass = document.querySelectorAll('.chat-user-list li');
  removeClass.forEach((element: any) => {
    element.classList.remove('active');
  });

  document.querySelector('.user-chat').classList.add('user-chat-show')
  document.querySelector('.chat-welcome-section').classList.add('d-none');
  document.querySelector('.user-chat').classList.remove('d-none');
  event.target.closest('li').classList.add('active');
  var data = this.chat.filter((chat: any) => {
    return chat.id === id;
  });
  this.userName = data[0].name
  this.userStatus = data[0].status
  this.userProfile = data[0].profilePicture
  this.message = data[0].messages
  this.onListScroll();
}

// Contact Search
ContactSearch() {
  var input: any, filter: any, ul: any, li: any, a: any | undefined, i: any, txtValue: any;
  input = document.getElementById("searchContact") as HTMLAreaElement;
  filter = input.value.toUpperCase();
  ul = document.querySelectorAll(".chat-user-list");
  ul.forEach((item: any) => {
    li = item.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h5")[0];
      txtValue = a?.innerText;
      if (txtValue?.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  })
}

// Message Search
MessageSearch() {
  var input: any, filter: any, ul: any, li: any, a: any | undefined, i: any, txtValue: any;
  input = document.getElementById("searchMessage") as HTMLAreaElement;
  filter = input.value.toUpperCase();
  ul = document.getElementById("users-conversation");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("p")[0];
    txtValue = a?.innerText;
    if (txtValue?.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Filter Offcanvas Set
onChatInfoClicked() {
  (document.querySelector('.user-profile-sidebar') as HTMLElement).style.display = 'block'
}

CloseChatInfo() {
  (document.querySelector('.user-profile-sidebar') as HTMLElement).style.display = 'none'
}

/**
 * Returns form
 */
get form() {
  return this.formData.controls;
}

/**
 * Save the message in chat
 */
messageSave() {
  var groupMsg = document.querySelector('.pills-groups-tab.active');
  const message = this.formData.get('message')!.value;
  if (message) {
    if (!groupMsg) {
      document.querySelector('.chat-user-list li.active .chat-user-message').innerHTML = message ? message : this.img;
    }
    var img = this.img ? this.img : '';
    var status = this.img ? true : '';
    var dateTime = this.datePipe.transform(new Date(), "h:mm a");
    var chatReplyUser = this.isreplyMessage == true ? (document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name") as HTMLAreaElement).innerHTML : '';
    var chatReplyMessage = this.isreplyMessage == true ? (document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0") as HTMLAreaElement).innerText : '';
    this.message.push({
      id: 1,
      message: message,
      name: this.senderName,
      profile: this.senderProfile,
      time: dateTime,
      align: 'right',
      isimage: status,
      imageContent: [img],
      replayName: chatReplyUser,
      replaymsg: chatReplyMessage,
    });
    this.onListScroll();

    // Set Form Data Reset
    this.formData = this.formBuilder.group({
      message: null,
    });
    this.isreplyMessage = false;
    this.emoji = '';
    this.img = '';
    chatReplyUser = '';
    chatReplyMessage = '';
    document.querySelector('.replyCard')?.classList.remove('show');
  }
}

onListScroll() {
  if (this.scrollRef !== undefined) {
    setTimeout(() => {
      this.scrollRef.SimpleBar.getScrollElement().scrollTop = this.scrollRef.SimpleBar.getScrollElement().scrollHeight;
    }, 500);
  }
}

// Emoji Picker
showEmojiPicker = false;
sets: any = [
  'native',
  'google',
  'twitter',
  'facebook',
  'emojione',
  'apple',
  'messenger'
]
set: any = 'twitter';
toggleEmojiPicker() {
  this.showEmojiPicker = !this.showEmojiPicker;
}

addEmoji(event: any) {
  const { emoji } = this;
  const text = `${emoji}${event.emoji.native}`;
  this.emoji = text;
  this.showEmojiPicker = false;
}

onFocus() {
  this.showEmojiPicker = false;
}
onBlur() {
}

closeReplay() {
  document.querySelector('.replyCard')?.classList.remove('show');
}

// Copy Message
copyMessage(event: any) {
  navigator.clipboard.writeText(event.target.closest('.chats').querySelector('.messageText').innerHTML);
  document.getElementById('copyClipBoard')?.classList.add('show');
  setTimeout(() => {
    document.getElementById('copyClipBoard')?.classList.remove('show');
  }, 1000);
}

// Delete Message
deleteMessage(event: any) {
  event.target.closest('.chats').remove();
}

// Delete All Message
deleteAllMessage(event: any) {
  var allMsgDelete: any = document.getElementById('users-conversation')?.querySelectorAll('.chats');
  allMsgDelete.forEach((item: any) => {
    item.remove();
  })
}

// Replay Message
replyMessage(event: any) {
  this.isreplyMessage = true;
  document.querySelector('.replyCard')?.classList.add('show');
  var copyText = event.target.closest('.chats').querySelector('.messageText').innerHTML;
  (document.querySelector(".replyCard .replymessage-block .flex-grow-1 .mb-0") as HTMLAreaElement).innerHTML = copyText;
  var msgOwnerName: any = event.target.closest(".chats").classList.contains("right") == true ? 'You' : document.querySelector('.username')?.innerHTML;
  (document.querySelector(".replyCard .replymessage-block .flex-grow-1 .conversation-name") as HTMLAreaElement).innerHTML = msgOwnerName;
}

/**
* Open center modal
* @param centerDataModal center modal data
*/
centerModal(centerDataModal: any) {
  this.modalService.open(centerDataModal, { centered: true });
}

// File Upload
imageURL: string | undefined;
img: any;
fileChange(event: any) {
  let fileList: any = (event.target as HTMLInputElement);
  let file: File = fileList.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    this.imageURL = reader.result as string;
    this.img = this.imageURL;
  }
  reader.readAsDataURL(file)
}

/**
 * Topbar Light-Dark Mode Change
 */
changeMode(mode: string) {
  this.mode = mode;
  switch (mode) {
    case 'light':
      document.body.setAttribute('data-bs-theme', "light");
      break;
    case 'dark':
      document.body.setAttribute('data-bs-theme', "dark");
      break;
    default:
      document.body.setAttribute('data-bs-theme', "light");
      break;
  }
}

/***
 * ========== Group Msg ============
 */
/**
* Show user chat
*/
// tslint:disable-next-line: typedef
showGroupChat(event: any, id: any) {
  var removeClass = document.querySelectorAll('.chat-list li');
  removeClass.forEach((element: any) => {
    element.classList.remove('active');
  });
  document.querySelector('.user-chat').classList.add('user-chat-show')
  document.querySelector('.chat-welcome-section').classList.add('d-none');
  document.querySelector('.user-chat').classList.remove('d-none');
  event.target.closest('li').classList.add('active');
  var data = this.groups.filter((group: any) => {
    return group.id === id;
  });
  this.userName = data[0].name
  this.userProfile = ''
  this.message = data[0].messages
}

/**
 * Open add group modal
 * @param content content
 */
// tslint:disable-next-line: typedef
openGroupModal(content: any) {
  this.modalService.open(content, { centered: true });
}

// Group Search
GroupSearch() {
  var input: any, filter: any, ul: any, li: any, a: any | undefined, i: any, txtValue: any;
  input = document.getElementById("searchGroup") as HTMLAreaElement;
  filter = input.value.toUpperCase();
  ul = document.querySelectorAll(".group-list");
  ul.forEach((item: any) => {
    li = item.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h5")[0];
      txtValue = a?.innerText;
      if (txtValue?.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  })
}


}
