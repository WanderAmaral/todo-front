import FormRegister from "./components/form-register-login";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <FormRegister />
      </div>
    </div>
  );
}
