import test, { expect } from "@playwright/test";
test("should display a list of books and support deleting all books", async ({
  page,
}) => {
  const book1Title = "The Design of Everyday Things";
  const book2Title = "The Most Human Human";

  const book1 = page.getByText(book1Title);
  const book2 = page.getByText(book2Title);

  await page.goto("http://localhost:5173");

  await expect(book1).toHaveCount(1);
  await page.getByRole("button", { name: book1Title }).click();
  await expect(book1).toHaveCount(0);

  await expect(book2).toHaveCount(1);
  await page.getByRole("button", { name: book2Title }).click();
  await expect(book2).toHaveCount(0);

  await expect(page.getByText("No books in the library.")).toHaveCount(1);


});

  test("should support adding new book", async) ({
  page,
}) => {
