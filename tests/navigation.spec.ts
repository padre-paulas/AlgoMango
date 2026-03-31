import { test, expect } from '@playwright/test';

test.describe('Sidebar navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('default page is Quicksort', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Quicksort', level: 1 })).toBeVisible();
  });

  test('navigates to Bubblesort', async ({ page }) => {
    await page.getByTestId('nav-bubblesort').click();
    await expect(page.getByRole('heading', { name: 'Bubblesort', level: 1 })).toBeVisible();
  });

  test('navigates to Quicksort from another page', async ({ page }) => {
    await page.getByTestId('nav-bubblesort').click();
    await page.getByTestId('nav-quicksort').click();
    await expect(page.getByRole('heading', { name: 'Quicksort', level: 1 })).toBeVisible();
  });

  test('navigates to Bogosort', async ({ page }) => {
    await page.getByTestId('nav-bogosort').click();
    await expect(page.getByRole('heading', { name: 'Bogosort', level: 1 })).toBeVisible();
  });

  test('navigates to Simple Search', async ({ page }) => {
    await page.getByTestId('nav-simple-search').click();
    await expect(page.getByRole('heading', { name: 'Simple Search', level: 1 })).toBeVisible();
  });

  test('navigates to Binary Search', async ({ page }) => {
    await page.getByTestId('nav-binary-search').click();
    await expect(page.getByRole('heading', { name: 'Binary Search', level: 1 })).toBeVisible();
  });

  test('navigates to Sign In', async ({ page }) => {
    await page.getByTestId('nav-sign-in').click();
    await expect(page.locator('header')).toBeVisible();
  });

  test('can switch between pages multiple times', async ({ page }) => {
    await page.getByTestId('nav-bubblesort').click();
    await expect(page.getByRole('heading', { name: 'Bubblesort', level: 1 })).toBeVisible();

    await page.getByTestId('nav-binary-search').click();
    await expect(page.getByRole('heading', { name: 'Binary Search', level: 1 })).toBeVisible();

    await page.getByTestId('nav-quicksort').click();
    await expect(page.getByRole('heading', { name: 'Quicksort', level: 1 })).toBeVisible();
  });
});
