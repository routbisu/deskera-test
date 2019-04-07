import { Component } from "@angular/core";
import { ChatService } from "../../services/chat/chat.service";

@Component({
  selector: "chat-window",
  template: require("./chat-window.component.html"),
  styles: [require("./chat-window.component.scss")]
})
export class ChatWindowComponent {
  constructor(private chat: ChatService) {}

  messages: any[] = [];

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log("message", msg);
      if (msg && msg.text) {
        const text = JSON.parse(msg.text);
        this.messages.push(text.message);
      }
    });
  }

  sendMessage(message) {
    const obj = {
      to: "routbisu",
      from: "ashunayak",
      message: "Hello world"
    };
    this.chat.sendMsg(obj);
  }
}
