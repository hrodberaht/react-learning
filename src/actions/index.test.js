import * as actions from "./index";

describe("cards actions", () => {
  it("addCard should create addCard action", () => {
    expect(actions.addCard("John", "test@test.pl")).toEqual({
      type: "ADD_CARD",
      name: "John",
      email: "test@test.pl",
      id: 3
    });
  });

  it("deleteCard should create deleteCard action", () => {
    expect(actions.deleteCard(1)).toEqual({
      type: "DELETE_CARD",
      id: 1
    });
  });

  it("filter should create filter action", () => {
    expect(actions.filter("foo")).toEqual({
      type: "FILTER",
      filterText: "foo"
    });
  });

  it("toggleAddCard should create toggleAddcard action", () => {
    expect(actions.toggleAddCard).toEqual({
      type: "TOGGLE_ADD_CARD",
    });
  });


});
