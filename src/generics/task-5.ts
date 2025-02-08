export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin",
  [UserRole.editor]: "Editor",
  [UserRole.guest]: "Guest",
};

// export default RoleDescription;
