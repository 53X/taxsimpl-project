import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/income-tax-advisory-compliance",
  "/blogs",
  "/contact",
  "/privacy",
  "/terms",
] as const;

const viewports = [
  { width: 320, height: 640 },
  { width: 375, height: 812 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1440, height: 900 },
] as const;

for (const route of routes) {
  for (const viewport of viewports) {
    test(`no horizontal overflow on ${route} at ${viewport.width}px`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto(route, { waitUntil: "networkidle" });

      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        return doc.scrollWidth - doc.clientWidth;
      });

      expect(overflow).toBeLessThanOrEqual(1);
    });
  }
}

test("review quotes are centered without line-clamp truncation", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/#reviews", { waitUntil: "networkidle" });

  const quoteStyles = await page.locator("blockquote.review-quote").first().evaluate((el) => {
    const style = window.getComputedStyle(el);
    return {
      display: style.display,
      textAlign: style.textAlign,
      webkitLineClamp: style.webkitLineClamp,
      overflow: style.overflow,
    };
  });

  expect(quoteStyles.textAlign).toBe("center");
  expect(quoteStyles.webkitLineClamp).not.toBe("5");
});
