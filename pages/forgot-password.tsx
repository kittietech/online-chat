import Button from "@/components/shared/buttons/Button/Button";
import Input from "@/components/shared/forms/Input/Input";
import Layout from "@/components/shared/layout/Layout";
import Heading from "@/components/shared/typography/Heading/Heading";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <Layout className="flex flex-col">
      <form className="w-full px-14 pt-11 pb-8 rounded-3xl max-w-2xl m-auto bg-slate-600 border border-gray-500">
        <Heading className="mb-5">
          Забули <br />
          адресу електронної <br /> пошти/пароль?
        </Heading>

        <p className="mb-5 text-lg text-center">
          Ми надішлемо вам повідомлення з інструкціями <br /> для скидання
          пароля
        </p>

        <Input type="email" name="email" placeholder="name@example.com" />

        <Button type="submit">Надішліть мені повідомлення</Button>

        <p className="text-lg text-center">
          Згадали пароль? <Link href="/sign-in">Увійти</Link>
        </p>
      </form>
    </Layout>
  );
};

export default ForgotPassword;
