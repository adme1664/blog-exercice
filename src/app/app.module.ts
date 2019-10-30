import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
