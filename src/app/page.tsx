"use client";
import { createElement } from "react";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("common");
  const m = useTranslations("main");
  return (
    <>
      {createElement("button", null, t("save"))}
      {createElement("button", null, m("hello", { name: "rakib" }))}
    </>
  );
}
