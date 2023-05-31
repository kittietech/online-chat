import Button from "@/components/shared/buttons/Button/Button";
import Input from "@/components/shared/forms/Input/Input";
import Layout from "@/components/shared/layout/Layout";
import Heading from "@/components/shared/typography/Heading/Heading";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type FormData = z.infer<typeof schema>;

const schema = z.object({
  email: z.string().min(1, { message: "Уведіть email" }),
  password: z
    .string()
    .min(8, { message: "Пароль має містити мінімум 8 символів" }),
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Layout className="flex flex-col">
      <form
        className="w-full px-14 pt-11 pb-8 rounded-3xl max-w-2xl m-auto bg-slate-600 border border-gray-500"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading>Ласкаво просимо</Heading>

        <Input
          type="email"
          placeholder="Ваша пошта"
          icon="mail"
          errors={errors}
          {...register("email")}
        />

        <Input
          type="password"
          placeholder="Пароль"
          icon="lock"
          errors={errors}
          {...register("password")}
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
