import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { UserListItemComponent } from "../lib/components/user-list-item/user-list-item.component";
import { UserModel } from "../lib/models/user/user.model";
import { ViewModeEnum } from "../lib/enums/view-mode.enum";

export const user: UserModel = {
  name: "testUser",
  previousName: null
};

export const mode = ViewModeEnum.view;

storiesOf("Shared Component", module).add("Default", () => ({
  component: UserListItemComponent,
  props: {
    user,
    mode
  }
}));
