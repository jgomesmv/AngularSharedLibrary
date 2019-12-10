import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { UserFormComponent } from "../../lib/components/user-form/user-form.component";
import { UserModel } from "../../lib/models/user/user.model";
import { ViewModeEnum } from "../../lib/enums/view-mode.enum";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

// @ts-ignore
import * as markdown from "./user-form.notes.md";

export const user: UserModel = {
  name: "testUser",
  previousName: null
};

export const actions = {
  userCreated: action("onUserCreated"),
  userEdited: action("onUserEdited")
};

storiesOf("User Form Component", module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, BrowserModule, ReactiveFormsModule]
    })
  )
  .add(
    "Create Mode",
    () => ({
      component: UserFormComponent,
      props: {
        user,
        mode: ViewModeEnum.createMode,
        userSubmited: actions.userCreated
      }
    }),
    { notes: { markdown } }
  )
  .add("Edit Mode", () => ({
    component: UserFormComponent,
    props: {
      user,
      mode: ViewModeEnum.editMode,
      userSubmited: actions.userEdited
    }
  }));
