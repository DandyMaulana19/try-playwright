import { test, expect } from "@playwright/test";

test("As user i want to visit mesti minum login website", async ({ page }) => {
  await page.goto("https://mestiminum.com");
  await page.locator('[class="isax isax-profile-circle text-2xl"]').click();
  await page.locator('[href="/auth/login"]').click();
  await expect(page).toHaveTitle("Login | Mesti Minum");
});
