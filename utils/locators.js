import { Page } from "@playwright/test";

export class Locators {
  constructor(page) {
    this.page = page;
  }

  filterTab() {
    return this.page.locator("class=product_sort_container");
    //select element
  }

  aboustTab() {
    return this.page.locator("id=about_sidebar_link", { hasText: "About" });
  }

  openMenuButton() {
    return this.page.locator("id=react-burger-menu-btn");
  }
}
