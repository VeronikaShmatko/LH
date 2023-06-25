import validUser from "/cypress/fixtures/validUser.json";
import { loginMe } from "/cypress/support/utils";
import { index } from "/cypress/support/index";

describe("Раздел профиль", () => {
  beforeEach(() => {
    cy.visit("/auth");
  });
  it.only("Test 1:Проверка, что если в разделе 'Редактирование профиля' оставить все поля пустыми и нажать сохранить,высветятся валидационные ошибки", () => {
    loginMe();
    cy.get(".icon-wrapper").eq(4).click();
    cy.contains("Редактировать профиль").click();
    cy.get("#edit-profile-submit").click();
    cy.contains("Минимальная длина 2 символа").should("be.visible");
    cy.contains("E-mail не может быть пустым").should("be.visible");
    cy.contains("Поле не может быть пустым").should("be.visible");
  });
});
