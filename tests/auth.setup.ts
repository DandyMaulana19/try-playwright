import { test as setup, expect } from "@playwright/test";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  await page.goto("http://localhost:8000/auth/login");

  const userEmail = process.env.USER_EMAIL as string;
  const userPassword = process.env.USER_PASSWORD as string;

  await page.getByLabel("Email address").fill(userEmail);
  await page.getByLabel("Password").fill(userPassword);
  await page.getByRole("button", { name: "login" }).click();

  await expect(page).toHaveURL("http://localhost:8000/");

  await page.context().storageState({ path: authFile });
});
