import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebsocketService } from './services/socket/socket.service';
import { ChatService } from './services/chat/chat.service';

import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ChatHeaderComponent } from './main-content/chat-header/chat-header.component';
import { ProfileSectionComponent } from './main-content/chat-header/profile-section/profile-section.component';
import { ChatWindowComponent } from './main-content/chat-window/chat-window.component';
import { UpdateProfileModalComponent } from './main-content/update-profile-modal/update-profile-modal.component';
import { UpdateProfileModalService } from './services/update-profile-modal/update-profile-modal.service';

@NgModule({
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LeftNavComponent,
    MainContentComponent,
    ChatHeaderComponent,
    ProfileSectionComponent,
    ChatWindowComponent,
    UpdateProfileModalComponent
  ],
  providers: [ChatService, WebsocketService, UpdateProfileModalService]
})
export class AppModule {}
