"use client";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("common");
  const m = useTranslations("main");
  return (
    <>
      <button>{t("save")}</button>
      <button>{m("hello", { name: "rakib" })}</button>;
    </>
  );
}
