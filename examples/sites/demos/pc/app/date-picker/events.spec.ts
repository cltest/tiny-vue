import { expect, test } from '@playwright/test'

test('[DatePicker] 测试事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#events')

  // focus 事件
  await page.locator('input[type="text"]').nth(1).click()
  const focusEventMessageDom = page.locator('div').filter({ hasText: '触发 focus 事件' }).nth(1)
  await expect(focusEventMessageDom).toBeVisible()

  // blur 事件
  await page.locator('input[type="text"]').nth(2).click()
  await page.getByRole('cell', { name: '10' }).getByText('10').click()
  const blurEventMessageDom = page.locator('div').filter({ hasText: '触发 blur 事件' }).nth(1)
  await expect(blurEventMessageDom).toBeVisible()

  // change 事件
  await page.locator('input[type="text"]').nth(3).click()
  await page.getByRole('cell', { name: '10' }).getByText('10').click()
  const changeEventMessageDom = page.locator('div').filter({ hasText: '触发 change 事件，组件绑定值为：' }).nth(1)
  await expect(changeEventMessageDom).toBeVisible()

  // onPick 事件
  await page.locator('#events').getByRole('textbox').nth(3).click()
  await page.getByRole('cell', { name: '10' }).getByText('10').first().click()
  const onPickEventMessageDom = page.locator('div').filter({ hasText: '触发 onPick 事件，开始日期为：' }).nth(1)
  await expect(onPickEventMessageDom).toBeVisible()
})
