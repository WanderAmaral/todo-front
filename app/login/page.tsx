import FormLogin from "./components/form-login";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <FormLogin />
      </div>
    </div>
  );
}
