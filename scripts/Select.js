const rootSelector = "[data-js-select]";

class Select {
  selectors = {
    root: rootSelector,
    originalControl: "[data-js-select-original-control]",
    button: "[data-js-select-button]",
    dropDown: "[data-js-select-dropdown]",
    oprion: "[data-js-select-option]",
  };

  stateClasses = {
    isExpanded: "is-expanded",
    isSelector: "is-selector",
    isCurrent: "is-current",
    isOnTheLeftSide: "is-on-the-left-side",
    isOnTheRightSide: "is-on-the-right-side",
  };

  stateAttributes = {
    ariaExpanded: "aria-expanded",
    ariaSelected: "aria-selected",
    ariaActiveDescendant: "aria-activedescendant",
  };

  initialState = {
    isExpanded: false,
    currentOptionIndex: null,
    selectedOptionElement: null,
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.originalControlElement = this.rootElement.querySelector(
      this.selectors.originalControl
    );

    this.buttonElement = this.rootElement.querySelector(this.selectors.button);

    this.dropDownElement = this.rootElement.querySelector(
      this.selectors.dropDown
    );

    this.optionElements = this.dropDownElement.querySelectorAll(
      this.selectors.option
    );

    this.state = {
      ...this.initialState,
      currentOptionIndex: this.originalControlElement.selectedIndex,
      selectedOptionElement:
        this.optionElements[this.originalControlElement.selectedIndex],
    };
  }
}

class SelectCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Select(element);
    });
  }
}

export default SelectCollection;
