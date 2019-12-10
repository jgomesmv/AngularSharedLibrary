import { NgModule } from "@angular/core";
import { UserListItemComponent } from "./components/user-list-item/user-list-item.component";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [UserFormComponent, UserListItemComponent],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  exports: [UserFormComponent, UserListItemComponent]
})
export class SharedComponentsModule {}
