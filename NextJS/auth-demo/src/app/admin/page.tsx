import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./actions";

export default async function Admin() {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data;

  return (
    <>
      {users.map((user, index) => {
        return (
          <div
            key={user.id}
            className={`flex items-center justify-between gap-4 p-4 ${
              index % 2 === 0
                ? "bg-neutral-50 dark:bg-neutral-800"
                : "bg-white dark:bg-neutral-900"
            }`}
          >
            <div className="flex flex-col gap-2 dark:text-neutral-200">

              {/* EMAIL DISPLAY (FIXED) */}
              <div>
                {user.primaryEmailAddress?.emailAddress ?? "No email"}
              </div>

              {/* ROLE DISPLAY */}
              <div>{user.publicMetadata.role as string}</div>
            </div>

            <div className="flex gap-2">

              {/* MAKE MODERATOR */}
              <form action={setRole} className="inline">
                <input type="hidden" name="id" value={user.id} />
                <input type="hidden" name="role" value="moderator" />
                <button
                  type="submit"
                  className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600"
                >
                  Make Moderator
                </button>
              </form>

              {/* MAKE ADMIN */}
              <form action={setRole} className="inline">
                <input type="hidden" name="id" value={user.id} />
                <input type="hidden" name="role" value="admin" />
                <button
                  type="submit"
                  className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600"
                >
                  Make Admin
                </button>
              </form>

              {/* REMOVE ROLE */}
              <form action={removeRole} className="inline">
                <input type="hidden" name="id" value={user.id} />
                <button
                  type="submit"
                  className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600"
                >
                  Remove Role
                </button>
              </form>

            </div>
          </div>
        );
      })}
    </>
  );
}
