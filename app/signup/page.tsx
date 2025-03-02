"use client";

import UpsertLogin from "@/components/upsert-login";
import { createLogin } from "../_http/create-user";

export default function SignupPage() {

  console.log()


  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <UpsertLogin upsertFunction={createLogin} redirect="login" />
      </div>
    </div>
  );
}
