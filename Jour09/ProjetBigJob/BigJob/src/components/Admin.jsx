import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { callUpdateRoleApi } from "../api/adminApi";

export const Admin = ({ usersInfo }) => {
  const handleUpdateRole = async (e, userId) => {
    const newRole = e;
    const token = localStorage.getItem("token");
    console.log(newRole, userId);
    try {
      await callUpdateRoleApi(token, userId, newRole);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <h2 className="text-lg">Les utilisateurs:</h2>
      <ul role="list" className="divide-y divide-gray-100">
        {usersInfo &&
          usersInfo.map((user) => (
            <li key={user.email} className="flex justify-between gap-x-6 py-5">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {user.username}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {user.email}
                </p>
              </div>

              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <Select
                  onValueChange={(event) => handleUpdateRole(event, user.id)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={user.role} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">admin</SelectItem>
                    <SelectItem value="moderator">moderator</SelectItem>
                    <SelectItem value="user">user</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
};
