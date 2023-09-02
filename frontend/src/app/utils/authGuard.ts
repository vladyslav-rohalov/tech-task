import { useAuth } from "@/app/hooks/useAuth";
import { redirect } from "next/navigation";

export default function authGuard() {
  const { isLogin } = useAuth();
  if (!isLogin) redirect("/authorization");
}
