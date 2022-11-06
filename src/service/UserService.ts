import { User } from "@/model/User";

export class UserService {
  getUserInfo(userId: number, test: Array<User>): Array<User> {
    let users = new Array<User>();
    const now = new Date().toLocaleString();
    users = test;
    if (userId == 1) {
      let user = new User(1, "Khanh Nguyen", now);
      users.push(user);
    } else if (userId == 2) {
      let user = new User(2, "Tung Hoang", now);
      users.push(user);
    } else if (userId == 3) {
      let user = new User(3, "Toan Hoang", now);
      users.push(user);
    } else if (userId == 4) {
      let user = new User(4, "Long Nguyen", now);
      users.push(user);
    } else {
    }
    return users;
  }
}
