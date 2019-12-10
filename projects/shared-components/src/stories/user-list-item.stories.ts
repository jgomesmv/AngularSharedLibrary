import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { UserListItemComponent } from "../lib/components/user-list-item/user-list-item.component";
import { UserModel } from "../lib/models/user/user.model";
import { ViewModeEnum } from "../lib/enums/view-mode.enum";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { UserFormComponent } from "../lib/components/user-form/user-form.component";

export const user: UserModel = {
  name: "testUser",
  previousName: null
};

export const mode = ViewModeEnum.view;

storiesOf("User List Item Component", module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, BrowserModule, ReactiveFormsModule],
      declarations: [UserFormComponent]
    })
  )
  .add("Default", () => ({
    component: UserListItemComponent,
    props: {
      user,
      mode
    }
  }));
