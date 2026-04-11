import z from "zod";

const envSchema = z.object({
  BETTER_AUTH_SECRET: z.string({
    message: "Better auth secrect cannot be empty!",
  }),
  BETTER_AUTH_URL: z.url({
    message: "Better auth URL cannot be empty or must be valid URL",
  }),

  DATABASE_URL: z.string({
    message: "Database URL cannot be empty!",
  }),

  GITHUB_CLIENT_ID: z.string({ message: "Github client id cannot be empty!" }),
  GITHUB_CLIENT_SECRET: z.string({
    message: "Github client secrect cannot be empty!",
  }),

  GOOGLE_CLIENT_ID: z.string({ message: "Github client id cannot be empty!" }),
  GOOGLE_CLIENT_SECRET: z.string({
    message: "Github client secrect cannot be empty!",
  }),
});

const parsedEnv = envSchema.safeParse(process.env);

if (parsedEnv.error) {
  console.error(z.flattenError(parsedEnv.error));
  throw new Error("Error parsing Environment variable.");
}

const env = parsedEnv.data;

export { env };
