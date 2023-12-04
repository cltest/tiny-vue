import { test, expect } from '@playwright/test'

test('插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('image#slot')
  const errorSlot = page.locator('.tiny-image__error')
  await expect(errorSlot).toBeVisible()
})
