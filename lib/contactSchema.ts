import { z } from "zod";

export const contactSchema = z.object({
  type: z.enum(["general", "estimate", "recruit", "other"], {
    errorMap: () => ({ message: "お問い合わせ種別を選択してください" }),
  }),
  name: z
    .string()
    .min(1, "お名前を入力してください")
    .max(100, "100文字以内でご入力ください"),
  company: z.string().max(100).optional(),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("正しいメールアドレスをご入力ください")
    .max(200),
  phone: z
    .string()
    .max(30, "30文字以内でご入力ください")
    .regex(/^[0-9\-+() 　]*$/, "数字とハイフンのみで入力してください")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(1, "件名を入力してください")
    .max(200, "200文字以内でご入力ください"),
  message: z
    .string()
    .min(10, "10文字以上でご入力ください")
    .max(3000, "3000文字以内でご入力ください"),
  privacy: z.literal(true, {
    errorMap: () => ({
      message: "プライバシーポリシーへの同意が必要です",
    }),
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const contactTypeOptions: {
  value: ContactInput["type"];
  label: string;
}[] = [
  { value: "general", label: "一般的なお問い合わせ" },
  { value: "estimate", label: "お見積り・工事のご依頼" },
  { value: "recruit", label: "採用に関するお問い合わせ" },
  { value: "other", label: "その他" },
];
