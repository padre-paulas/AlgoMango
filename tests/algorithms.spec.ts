import { test, expect } from '@playwright/test';

// ---------------------------------------------------------------------------
// Quicksort
// ---------------------------------------------------------------------------

test.describe('Quicksort page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows Quicksort heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Quicksort', level: 1 })).toBeVisible();
  });

  test('shows Controls panel', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Controls', level: 2 })).toBeVisible();
  });

  test('shows array bars visualization', async ({ page }) => {
    // Each bar is rendered with an inline height style by ArrayBars
    await expect(page.locator('div[style*="height"]').first()).toBeVisible();
  });

  test('shows two sliders (elements and time)', async ({ page }) => {
    await expect(page.getByRole('slider')).toHaveCount(2);
  });

  test('shows START button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'START' })).toBeVisible();
  });

  test('shows number of elements label', async ({ page }) => {
    await expect(page.getByText(/Number of elements:/)).toBeVisible();
  });

  test('shows time per operation label', async ({ page }) => {
    await expect(page.getByText(/Time per operation, ms:/)).toBeVisible();
  });

  test('changing element count slider updates the displayed value', async ({ page }) => {
    const slider = page.getByRole('slider').first();
    await slider.fill('20');
    // The paragraph shows "Number of elements:\n<value>" — confirm the new value is rendered
    await expect(page.locator('p', { hasText: /Number of elements:/ })).toContainText('20');
  });

  test('changing time slider updates the displayed value', async ({ page }) => {
    const slider = page.getByRole('slider').nth(1);
    await slider.fill('100');
    await expect(page.locator('p', { hasText: /Time per operation, ms:/ })).toContainText('100');
  });
});

// ---------------------------------------------------------------------------
// Bubblesort
// ---------------------------------------------------------------------------

test.describe('Bubblesort page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('nav-bubblesort').click();
  });

  test('shows Bubblesort heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Bubblesort', level: 1 })).toBeVisible();
  });

  test('shows Controls panel', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Controls', level: 2 })).toBeVisible();
  });

  test('shows two sliders', async ({ page }) => {
    await expect(page.getByRole('slider')).toHaveCount(2);
  });

  test('shows START button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'START' })).toBeVisible();
  });

  test('shows number of elements label', async ({ page }) => {
    await expect(page.getByText(/Number of elements:/)).toBeVisible();
  });

  test('shows time per operation label', async ({ page }) => {
    await expect(page.getByText(/Time per operation, ms:/)).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Bogosort
// ---------------------------------------------------------------------------

test.describe('Bogosort page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('nav-bogosort').click();
  });

  test('shows Bogosort heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Bogosort', level: 1 })).toBeVisible();
  });

  test('shows Controls panel', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Controls', level: 2 })).toBeVisible();
  });

  test('shows two sliders', async ({ page }) => {
    await expect(page.getByRole('slider')).toHaveCount(2);
  });

  test('shows START button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'START' })).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Binary Search
// ---------------------------------------------------------------------------

test.describe('Binary Search page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('nav-binary-search').click();
  });

  test('shows Binary Search heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Binary Search', level: 1 })).toBeVisible();
  });

  test('shows Info panel', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Info', level: 2 })).toBeVisible();
  });

  test('shows three sliders (elements, time, target)', async ({ page }) => {
    await expect(page.getByRole('slider')).toHaveCount(3);
  });

  test('shows START button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'START' })).toBeVisible();
  });

  test('shows number of elements label', async ({ page }) => {
    await expect(page.getByText(/Number of elements:/)).toBeVisible();
  });

  test('shows target label', async ({ page }) => {
    await expect(page.getByText(/Target:/).first()).toBeVisible();
  });

  test('shows time per operation label', async ({ page }) => {
    await expect(page.getByText(/Time per operation, ms:/)).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Simple Search
// ---------------------------------------------------------------------------

test.describe('Simple Search page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('nav-simple-search').click();
  });

  test('shows Simple Search heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Simple Search', level: 1 })).toBeVisible();
  });

  test('shows Info panel', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Info', level: 2 })).toBeVisible();
  });

  test('shows three sliders (elements, time, target)', async ({ page }) => {
    await expect(page.getByRole('slider')).toHaveCount(3);
  });

  test('shows START button', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'START' })).toBeVisible();
  });

  test('shows Sorted/Unsorted toggle', async ({ page }) => {
    await expect(page.getByText('Sorted/Unsorted')).toBeVisible();
    // The toggle is a round button adjacent to the label
    const toggle = page.locator('button.rounded-full');
    await expect(toggle).toBeVisible();
  });

  test('sorted/unsorted toggle can be clicked', async ({ page }) => {
    const toggle = page.locator('button.rounded-full');
    await toggle.click();
    // Verify the page did not crash and the heading is still present
    await expect(page.getByRole('heading', { name: 'Simple Search', level: 1 })).toBeVisible();
  });

  test('shows target label', async ({ page }) => {
    await expect(page.getByText(/Target:/).first()).toBeVisible();
  });
});
