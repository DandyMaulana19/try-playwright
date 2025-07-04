import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

test("As user i want to visit mesti minum login website", async ({ page }) => {
  await page.goto("http://localhost:8000");
  await page.getByRole("button", { name: "" }).click();
  await page.locator('[href="/auth/login"]').click();
  await expect(page).toHaveTitle("Login | Mesti Minum");
});

test("As user i want to login successfully", async ({ page }) => {
  await page.goto("http://localhost:8000");
  await page.getByRole("button", { name: "" }).click();
  await page.locator('[href="/auth/login"]').click();
  await expect(page).toHaveTitle("Login | Mesti Minum");

  const userEmail = process.env.USER_EMAIL as string;
  const userPassword = process.env.USER_PASSWORD as string;

  await page.getByLabel("Email address").fill(userEmail);
  await page.getByLabel("Password").fill(userPassword);
  await page.getByRole("button", { name: "login" }).click();

  await expect(page).toHaveURL("http://localhost:8000/");
});
