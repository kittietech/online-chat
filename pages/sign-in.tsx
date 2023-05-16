import Button from "@/components/shared/buttons/Button/Button";
import Input from "@/components/shared/forms/Input/Input";
import Layout from "@/components/shared/layout/Layout";
import Heading from "@/components/shared/typography/Heading/Heading";
import Link from "next/link";

const SignIn = () => {
  return (
    <Layout className="flex flex-col">
      <form className="w-full px-14 pt-11 pb-8 rounded-3xl max-w-2xl m-auto bg-slate-600 border border-gray-500">
        <Heading>Ласкаво просимо</Heading>

        <Input type="email" name="email" placeholder="Ваша пошта" icon="mail" />

        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          icon="lock"
        />

        <p className="mb-5 text-right">
          <Link href="/forgot-password">Забули пароль?</Link>
        </p>

        <Button type="submit">Увійти</Button>

        <p className="text-lg text-center">
          У вас немає облікового запису? <Link href="/sign-up">Реєстрація</Link>
        </p>
      </form>
    </Layout>
  );
};

export default SignIn;
