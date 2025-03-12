import { Text } from "lucide-react";
import React, { useState } from "react";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";
export default function Auth() {
  const [authState, setAuthState] = useState("login");
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <div className="flex justify-center items-center w-full max-w-sm flex-col gap-6">
          <h2 href="#" className="flex items-center self-center font-bold ">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground mr-2">
              <Text className="size-4" />
            </div>
            Fix My Words
          </h2>
          <div>
            {authState === "login" ? (
              <LoginForm setAuthState={setAuthState} />
            ) : (
              <RegisterForm setAuthState={setAuthState} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
