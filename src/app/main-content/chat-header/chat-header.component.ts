import { Component } from "@angular/core";

@Component({
  selector: "chat-header",
  template: require("./chat-header.component.html"),
  styles: [require("./chat-header.component.scss")]
})
export class ChatHeaderComponent {
  openModal() {
    console.log("Open the modals");
  }
}
