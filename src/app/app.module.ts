import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ChatHeaderComponent } from './main-content/chat-header/chat-header.component';
import { ChatWindowComponent } from './main-content/chat-window/chat-window.component';
import { UpdateProfileModalComponent } from './main-content/update-profile-modal/update-profile-modal.component';

@NgModule({
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LeftNavComponent,
    MainContentComponent,
    ChatHeaderComponent,
    ChatWindowComponent,
    UpdateProfileModalComponent
  ]
})
export class AppModule {}
