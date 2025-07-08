import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

test.describe("TC-LGN-001", { tag: "@Valid Login" }, () => {
  test("As user i want to visit mesti minum login website", async ({
    page,
  }) => {
    await page.goto("http://localhost:8000");
    await page.getByRole("button", { name: "" }).click();
    await page.locator('[href="/auth/login"]').click();
    await expect(page).toHaveTitle("Login | Mesti Minum");
  });

  test.describe("Login Admin", { tag: "@Valid Admin Login" }, () => {
    test("As admin i want to login successfully", async ({ page }) => {
      await page.goto("http://localhost:8000");
      await page.getByRole("button", { name: "" }).click();
      await page.locator('[href="/auth/login"]').click();
      await expect(page).toHaveTitle("Login | Mesti Minum");

      const adminEmail = process.env.ADMIN_EMAIL as string;
      const adminPassword = process.env.ADMIN_PASSWORD as string;

      await page.getByLabel("Email address").fill(adminEmail);
      await page.getByLabel("Password").fill(adminPassword);
      await page.getByRole("button", { name: "login" }).click();

      await expect(page).toHaveURL("http://localhost:8000/");
    });
  });

  test.describe("Login Admin", { tag: "@Valid User Login" }, () => {
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
  });
});
