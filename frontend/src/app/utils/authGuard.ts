import { useAuth } from "@/app/hooks/useAuth";
import { redirect } from "next/navigation";

export default function authGuard() {
  const { isLoading } = useAuth();
  if (isLoading) redirect("/authorization");
}
