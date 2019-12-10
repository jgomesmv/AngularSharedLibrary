import { Component, Input, OnInit } from "@angular/core";

import { UserModel } from "../../models/user/user.model";
// import { UsersDataSource } from "src/app/data-sources/users/users.data-source";
import { ViewModeEnum } from "../../enums/view-mode.enum";

@Component({
  selector: "sc-user-list-item",
  templateUrl: "./user-list-item.component.html",
  styleUrls: ["./user-list-item.component.scss"],
  host: { class: "c-userListItem" }
})
export class UserListItemComponent implements OnInit {
  @Input() public user: UserModel;
  @Input() public mode: ViewModeEnum = ViewModeEnum.view;
  public viewModes = ViewModeEnum;

  constructor() {}

  ngOnInit() {}

  public onEdit(): void {
    this.mode = this.viewModes.editMode;
  }

  public onDelete(): void {
    // this.usersDataSource.removeUser(this.user);
  }

  public onUserUpdated(user: UserModel): void {
    user.previousName = this.user.name;
    // this.usersDataSource.updateUser(user);
    this.mode = this.viewModes.view;
  }
}
