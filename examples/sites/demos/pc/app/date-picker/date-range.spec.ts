import { test, expect } from '@playwright/test'

test('测试日期范围选择', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#date-range')

  // 日期范围
  // TINY-TODO: 日期范围和日期时间范围无法成功在输入框中输入日期
  const startDate = page.getByPlaceholder('开始日期').first()
  const endDate = page.getByPlaceholder('结束日期').first()
  await startDate.click()
  await startDate.fill('2023-05-20')
  await startDate.press('Tab')
  await endDate.fill('2023-06-20')
  await startDate.click()
  await page.getByRole('row', { name: '4 5 6 7 8 9 10' }).getByText('4').click()
  await page.getByRole('row', { name: '9 10 11 12 13 14 15' }).getByText('10').click()
  await expect(startDate).toHaveValue('2023-06-04')
  await expect(endDate).toHaveValue('2023-07-10')

  // 日期时间范围
  const startDateTime = page.getByPlaceholder('开始日期').nth(1)
  const endDateTime = page.getByPlaceholder('结束日期').nth(1)
  await startDateTime.click()
  await startDateTime.fill('2023-05-20 08:00:00')
  await startDateTime.press('Tab')
  await endDateTime.fill('2023-06-20 18:00:00')
  await startDateTime.click()
  await startDateTime.press('Enter')
  await startDateTime.click()
  await page.getByRole('row', { name: '4 5 6 7 8 9 10' }).getByText('4').click()
  await page.getByRole('row', { name: '9 10 11 12 13 14 15' }).getByText('10').click()
  await page.getByRole('textbox', { name: '开始时间' }).click()
  await page.locator('li:nth-child(2) > span').first().click()
  await page.getByRole('button', { name: '确定' }).first().click()
  await page.getByRole('textbox', { name: '结束时间' }).click()
  await page
    .locator(
      'span:nth-child(3) > span:nth-child(2) > .tiny-time-panel > .tiny-time-panel__content > .tiny-time-spinner > div > .tiny-scrollbar__wrap > .tiny-scrollbar__view > li:nth-child(3) > span'
    )
    .first()
    .click()
  await page.getByRole('button', { name: '确定' }).first().click()
  await page.locator('.tiny-picker-panel__footer').getByRole('button', { name: '确定' }).click()
  await expect(startDateTime).toHaveValue('2023-06-04 01:00:00')
  await expect(endDateTime).toHaveValue('2023-07-10 02:00:00')

  // 月份范围
  const startMonth = page.getByPlaceholder('开始月份')
  const endMonth = page.getByPlaceholder('结束月份')
  await startMonth.click()
  await startMonth.fill('2023-05')
  await startMonth.press('Tab')
  await endMonth.fill('2023-06')
  await endMonth.press('Enter')
  await startMonth.click()
  await page.getByText('一月').first().click()
  await page.getByText('十二月').first().click()
  await expect(startMonth).toHaveValue('2023-01')
  await expect(endMonth).toHaveValue('2023-12')

  // 年份范围
  const startYear = page.getByPlaceholder('开始年份')
  const endYear = page.getByPlaceholder('结束年份')
  await startYear.click()
  await startYear.fill('2022')
  await startYear.press('Tab')
  await endYear.fill('2023')
  await endYear.press('Enter')
  await endYear.click()
  await page.getByRole('cell', { name: '2020' }).getByText('2020').click()
  await page.getByRole('cell', { name: '2023' }).getByText('2023').click()
  await expect(startYear).toHaveValue('2020')
  await expect(endYear).toHaveValue('2023')
})
