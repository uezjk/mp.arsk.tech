import { auth } from "~utils/state/auth.ts";

export default function UserHead() {
  return <div>UserHead component {auth.user.value?.id}</div>;
}
