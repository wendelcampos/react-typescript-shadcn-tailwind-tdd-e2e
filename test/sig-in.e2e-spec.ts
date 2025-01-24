import { test, expect } from '@playwright/test';

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle'});

  await page.getByLabel('E-mail').fill('waguiartrader@gmail.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText('Enviamos um link de autorização para o seu e-mail')

  expect(toast).toBeVisible()

  // await page.waitForTimeout(2000)
});

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle'});

  await page.getByLabel('E-mail').fill('wrong@gmail.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText('Credenciais inválidas')

  expect(toast).toBeVisible()

  // await page.waitForTimeout(2000)
});

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle'});

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
});

