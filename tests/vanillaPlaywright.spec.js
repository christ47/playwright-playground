// @ts-check
import { test, expect } from "@playwright/test";
test.describe("Basic UI automation test for an eccomerce", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    await page.type("#user-name", "standard_user");
    await page.type("#password", "secret_sauce");
    await page.click("#login-button");
  });

  test("buy a sauce lab backpack", async ({ page }) => {
    await page.getByText(/Sauce Labs Backpack/).click();
    await page.getByText(/Add to cart/).click();
    await page.click(".shopping_cart_link");
    await page.click('[data-test="checkout"]');
    await page.getByPlaceholder("First Name").type("Marcus");
    await page.getByPlaceholder("Last Name").type("Cantonna");
    await page.type("#postal-code", "TE1 7JA");
    await page.getByText("continue").click();
    await page.click("#finish");
    await expect(
      page.getByText(
        /Your order has been dispatched, and will arrive just as fast as the pony can get there!/
      )
    ).toBeVisible();
    await expect(page.locator(".complete-header")).toHaveText(
      "Thank you for your order!"
    );
  });

  });
